import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { JIRA_LABELS } from './constans.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/**
 * Membersihkan label agar terlihat profesional.
 */
function cleanLabel(label) {
  return label
    .replace(/^[\d\s\.\-\)]+/g, '') // Hapus angka, titik, strip di depan
    .replace(/\s+/g, ' ')          // Normalisasi spasi
    .trim();
}

/**
 * Mengambil semua label dan menyusunnya ke dalam format Tabel Markdown 
 * dengan visual zebra-striping (pembeda baris ganjil/genap) tanpa kolom Style.
 */
function combineLabels() {
  const inputDir = path.join(__dirname, '../../yml');
  const outputDir = path.join(__dirname, '../../label');
  
  const rawName = JIRA_LABELS || 'combined_labels';
  const fileName = rawName.replace(/[-\s]/g, '_');
  const outputFile = path.join(outputDir, `${fileName}.md`);

  if (!fs.existsSync(inputDir)) {
    console.error(`❌ Folder input tidak ditemukan: ${inputDir}`);
    return;
  }

  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  const files = fs.readdirSync(inputDir).filter(file => file.endsWith('.yml')).sort();
  if (files.length === 0) return;

  console.log(`📂 Memproses ${files.length} file dengan Zebra Row (Bold Only)...`);

  // --- HEADER LAPORAN ---
  let markdownContent = `# 📋 Professional Labels Report: ${rawName}\n\n`;
  markdownContent += `| Detail | Information |\n`;
  markdownContent += `| :--- | :--- |\n`;
  markdownContent += `| **Project ID** | \`${rawName}\` |\n`;
  markdownContent += `| **Status** | ✅ Generated Successfully |\n`;
  markdownContent += `| **Total Steps** | Calculating... |\n\n`;
  
  markdownContent += `--- \n\n`;
  markdownContent += `## 📝 List of Labels\n\n`;
  markdownContent += `| No | Description |\n`;
  markdownContent += `| :---: | :--- |\n`;

  let globalCounter = 1;
  let totalLabels = 0;

  files.forEach(file => {
    const filePath = path.join(inputDir, file);
    const content = fs.readFileSync(filePath, 'utf8');
    const lines = content.split('\n');

    lines.forEach(line => {
      const trimmedLine = line.trim();
      if (trimmedLine.startsWith('label:')) {
        const rawLabel = trimmedLine.split('label:')[1].trim();
        const cleaned = cleanLabel(rawLabel);
        
        if (cleaned) {
          totalLabels++;
          const isOdd = globalCounter % 2 !== 0;
          
          // Zebra striping menggunakan Bold untuk baris ganjil
          const safeLabel = cleaned.replace(/\|/g, '\\|');
          const finalLabel = isOdd ? `**${safeLabel}**` : safeLabel;

          markdownContent += `| ${globalCounter++} | ${finalLabel} |\n`;
        }
      }
    });
  });

  // Update total steps di header
  markdownContent = markdownContent.replace('Calculating...', `${totalLabels} Labels`);
  markdownContent += `\n\n> *Generated automatically by Label Maestro - ${new Date().toLocaleDateString('id-ID')}*`;

  fs.writeFileSync(outputFile, markdownContent, 'utf8');
  
  console.log(`✅ Berhasil! Laporan Profesional dibuat di: label/${fileName}.md`);
}

combineLabels();
