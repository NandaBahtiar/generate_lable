Sebagai Senior QA Automation Specialist, saya telah menyempurnakan prompt kamu agar menjadi **"Strict Generation Instruction"**. Prompt ini didesain agar AI tidak memberikan penjelasan basa-basi, tidak menyarankan instalasi, dan fokus 100% pada transformasi kode YAML di dalam folder `yml/`.

Berikut adalah versi *enhanced* yang bisa kamu gunakan:

---

tolong periksa folder C:\nandaa\code\BNI\generate-label-maestro 2\generate-label-maestro\format\coontohTS.yml untuk referensi

jadikan file dari path tersebut untuk referensi dalam penulisan

### **Enhanced Master Prompt (Strict Mode)**

"**Role:** Senior QA Automation Engineer (Maestro Framework Expert).
**Task:** Transform raw labels into structured Maestro YAML files.
**Constraints:** NO installation instructions. NO explanations. NO conversational filler. ONLY YAML output.

**1. File & Folder Architecture:**

* **Renaming:** Change all `TS_` prefixes to `TC_`.
* **Grouping:** Group files by their base name. (e.g., `TC_CHG_TRF_17_01` and `02` go into folder `TC_CHG_TRF_17/`).
* **Header:** Output the path as: `Path: [Folder_Name]/[File_Name].yml`.

**2. Standard Header & Metadata (Mandatory for ALL):**

```yaml
appId: ${APP_ID}
env:
  PATH_FOLDER_REPORT: ./reports
onFlowStart:
  - runScript:
      file: ../../../../configs/onflowstart/onflowstart.js
      env:
        JIRA_ISSUE: ${JIRA_ISSUE}
onFlowComplete:
  - runScript:
      file: ../../../../configs/onflowend/onflowend.js

```

**3. Transaction Logic (Conditional):**

* **IF file ends in `_01` (First TC):** Insert this script inside `onFlowStart` AFTER `onflowstart.js`:

```yaml
  - runScript:
      file: ../../../../configs/get-balance.js
      env:
        BALANCE_STATE: "before"

```
* **IF file ends in the last:** Insert this script inside `onFlowStart` AFTER `onflowstart.js`:

```yaml
  - runScript:
      file: ../../../../configs/get-balance.js
      env:
        BALANCE_STATE: "after"

```

*(Note: Do NOT include URI_EXTERNAL in the final output).*

**4. Body Transformation (Nested Pattern):**

* Convert flat labels into **Nested runFlows**.
* **Logic:** Odd-numbered labels (Action) MUST wrap even-numbered labels (Expectation) inside a `commands` block.
* **Automation Commands:** Inside every Even Label (Expectation), append:

```yaml
      - waitForAnimationToEnd
      - takeScreenshot: ${output.PATH_FOLDER_REPORT}/[Sequential_Number]_${TC}

```

* Sequential numbers for screenshots must start at `01` for each file.

**5. Input Data:**
Please process the following raw data from `yml/*` folder:
[INSERT RAW LABELS/FILES HERE]"

---

### **Apa yang diperbaiki dalam prompt ini?**

1. **Strict Constraint:** Menggunakan kata-kata seperti "NO explanations" dan "ONLY YAML output" untuk mencegah AI memberikan instruksi instalasi yang tidak perlu.
2. **Pathing Accuracy:** Menentukan secara spesifik bahwa `get-balance.js` diletakkan **setelah** `onflowstart.js`.
3. **Visual Hierarchy:** Memberikan contoh blok kode langsung di dalam prompt agar AI meniru indentasinya secara presisi.
4. **Sequential logic:** Mempertegas bahwa nomor screenshot harus *reset* ke `01` setiap ganti file baru.

Sekarang kamu tinggal menempelkan label-label kamu di bawah prompt tersebut. Apakah ada pola penamaan file lain selain `_01` yang perlu aku perhatikan?