const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const rootDir = path.resolve(__dirname, '..');
const zipFileName = 'edunexus-minor-project.zip';
const zipFilePath = path.join(rootDir, zipFileName);

console.log('========================================================================');
console.log('🚀 Starting packaging for EDUNEXUS Minor Project...');
console.log(`📂 Source Directory     : ${rootDir}`);
console.log(`📦 Destination Archive  : ${zipFilePath}`);
console.log('========================================================================\n');

// Remove existing archive if it exists
if (fs.existsSync(zipFilePath)) {
  fs.unlinkSync(zipFilePath);
  console.log('🗑️  Removed previous minor project zip.');
}

const directoriesToInclude = [
  'app',
  'src',
  'public',
  'prisma',
  'docs',
  'scripts',
  'tests',
  'ts.inchatbot-main',
];

const rootFilesToInclude = [
  'MINOR_PROJECT_MANUAL.md',
  'EDUNEXUS_MINOR_PROJECT_REPORT.md',
  'package.json',
  'package-lock.json',
  'tsconfig.json',
  'next.config.ts',
  'tailwind.config.ts',
  'postcss.config.mjs',
  'Dockerfile',
  'docker-compose.yml',
  'ecosystem.config.cjs',
  'render.yaml',
  'robots.txt',
  'vitest.config.ts',
  'next-env.d.ts',
  '.env',
  '.env.example',
  '.gitignore',
  '.dockerignore',
];

function shouldInclude(filePath) {
  const normalized = filePath.replace(/\\/g, '/');
  if (normalized.includes('node_modules')) return false;
  if (normalized.includes('.next')) return false;
  if (normalized.includes('.git')) return false;
  if (normalized.includes('graphify-out')) return false;
  if (normalized.includes('scratch')) return false;
  if (normalized.includes('.vscode')) return false;
  if (normalized.includes('__pycache__')) return false;
  if (normalized.includes('.pytest_cache')) return false;
  if (normalized.includes('.venv') || normalized.includes('/venv/')) return false;
  if (normalized.endsWith('.zip')) return false;
  if (normalized.endsWith('.tsbuildinfo')) return false;
  if (normalized.endsWith('.log')) return false;
  return true;
}

let archiver = null;
try {
  archiver = require('archiver');
} catch (e) {
  // Archiver not installed yet; will fall back to native compression
}

if (archiver) {
  console.log('📦 Using archiver module for compression...');
  const output = fs.createWriteStream(zipFilePath);
  const archive = new archiver.ZipArchive({
    zlib: { level: 9 },
  });

  output.on('close', () => {
    const sizeMB = (archive.pointer() / (1024 * 1024)).toFixed(2);
    printSuccess(sizeMB);
  });

  archive.on('warning', (err) => {
    if (err.code === 'ENOENT') {
      console.warn('⚠️  Warning:', err);
    } else {
      throw err;
    }
  });

  archive.on('error', (err) => {
    console.error('❌ Archiver Error:', err);
    process.exit(1);
  });

  archive.pipe(output);

  function addDirectory(dirPath, archivePrefix = '') {
    const entries = fs.readdirSync(dirPath, { withFileTypes: true });
    for (const entry of entries) {
      const fullPath = path.join(dirPath, entry.name);
      const relativePath = archivePrefix ? `${archivePrefix}/${entry.name}` : entry.name;
      if (!shouldInclude(fullPath)) continue;

      if (entry.isDirectory()) {
        addDirectory(fullPath, relativePath);
      } else if (entry.isFile()) {
        archive.file(fullPath, { name: relativePath });
      }
    }
  }

  for (const dir of directoriesToInclude) {
    const fullDirPath = path.join(rootDir, dir);
    if (fs.existsSync(fullDirPath)) {
      console.log(`📁 Adding directory: ${dir}/`);
      addDirectory(fullDirPath, dir);
    }
  }

  for (const file of rootFilesToInclude) {
    const fullFilePath = path.join(rootDir, file);
    if (fs.existsSync(fullFilePath)) {
      console.log(`📄 Adding file: ${file}`);
      archive.file(fullFilePath, { name: file });
    }
  }

  console.log('⏳ Finalizing zip compression...');
  archive.finalize();

} else {
  console.log('⚡ Archiver package not installed. Using native PowerShell Compress-Archive fallback...');
  const stagingDir = path.join(rootDir, '.staging_minor_project');
  if (fs.existsSync(stagingDir)) {
    fs.rmSync(stagingDir, { recursive: true, force: true });
  }
  fs.mkdirSync(stagingDir, { recursive: true });

  function copyFiltered(src, dest) {
    if (!shouldInclude(src)) return;
    const stat = fs.statSync(src);
    if (stat.isDirectory()) {
      fs.mkdirSync(dest, { recursive: true });
      const entries = fs.readdirSync(src);
      for (const entry of entries) {
        copyFiltered(path.join(src, entry), path.join(dest, entry));
      }
    } else if (stat.isFile()) {
      fs.copyFileSync(src, dest);
    }
  }

  for (const dir of directoriesToInclude) {
    const srcDir = path.join(rootDir, dir);
    if (fs.existsSync(srcDir)) {
      console.log(`📁 Staging directory: ${dir}/`);
      copyFiltered(srcDir, path.join(stagingDir, dir));
    }
  }

  for (const file of rootFilesToInclude) {
    const srcFile = path.join(rootDir, file);
    if (fs.existsSync(srcFile)) {
      console.log(`📄 Staging file: ${file}`);
      fs.copyFileSync(srcFile, path.join(stagingDir, file));
    }
  }

  console.log('⏳ Running PowerShell Compress-Archive...');
  try {
    const psCmd = `powershell -NoProfile -Command "Compress-Archive -Path '${stagingDir}\\*' -DestinationPath '${zipFilePath}' -CompressionLevel Optimal"`;
    execSync(psCmd, { stdio: 'inherit' });
    fs.rmSync(stagingDir, { recursive: true, force: true });
    const stats = fs.statSync(zipFilePath);
    const sizeMB = (stats.size / (1024 * 1024)).toFixed(2);
    printSuccess(sizeMB);
  } catch (err) {
    console.error('❌ Compression failed:', err.message);
    if (fs.existsSync(stagingDir)) {
      fs.rmSync(stagingDir, { recursive: true, force: true });
    }
    process.exit(1);
  }
}

function printSuccess(sizeMB) {
  console.log('\n🎉 ========================================================');
  console.log(`✅ Minor Project ZIP created successfully!`);
  console.log(`📁 File: ${zipFileName}`);
  console.log(`📊 Total Compressed Size: ${sizeMB} MB`);
  console.log('========================================================\n');
  console.log('💡 Included Components:');
  console.log('   - Full Next.js 16 + React 19 Multi-Tenant LMS (app/, src/)');
  console.log('   - Prisma ORM & Database Schemas (prisma/)');
  console.log('   - Static Assets, Illustrations & Logos (public/)');
  console.log('   - Complete Project Manual & Report (MINOR_PROJECT_MANUAL.md, EDUNEXUS_MINOR_PROJECT_REPORT.md)');
  console.log('   - Utility & CLI Diagnostic Scripts (scripts/edunexus-cli.cjs)');
  console.log('   - Python FastAPI + Qdrant RAG Academic Copilot (ts.inchatbot-main/)');
  console.log('   - Sanitized Environment Configurations (.env, .env.example)');
}
