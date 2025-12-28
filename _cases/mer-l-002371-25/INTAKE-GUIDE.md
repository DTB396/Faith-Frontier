# MER-L-002371-25 Case Intake Guide

## ✅ Case Setup Complete

**Case:** MER-L-002371-25  
**Court:** Superior Court of New Jersey, Law Division, Mercer County  
**Status:** Active  
**Filed:** 2025-10-29  

---

## 📁 Directory Structure

```
faithfrontier/
├── _cases/
│   └── mer-l-002371-25/
│       ├── index.md          ← Case front matter & overview
│       └── README.md          ← This guide
├── _data/
│   ├── cases-map.yml          ← Docket routing (MER-L-002371-25 added)
│   └── docket/
│       └── mer-l-002371-25.yml ← 20 docket entries
└── cases/
    └── mer-l-002371-25/
        ├── filings/           ← PDFs go here (20 files)
        ├── docket/            ← Alternative location
        ├── evidence/          ← Supporting evidence
        └── notes/             ← Internal notes
```

---

## 🚀 Automated PDF Intake

### Method 1: Using _inbox Subdirectory (Recommended)

1. **Place PDFs in `_inbox/mer-l-002371-25/` directory:**
   ```bash
   cp ~/Downloads/*.pdf _inbox/mer-l-002371-25/
   ```

2. **Commit and push to trigger GitHub Actions:**
   ```bash
   git add _inbox/mer-l-002371-25/
   git commit -m "intake: MER-L-002371-25 new filings"
   git push
   ```

3. **What happens automatically (via GitHub Actions):**
   - Script detects PDFs in case inbox directory
   - PDFs moved to `cases/mer-l-002371-25/filings/`
   - Entries added to `_data/docket/mer-l-002371-25.yml`
   - Files renamed to standard format: `YYYYMMDD-Type_description.pdf`
   - Pull request created for your review
   - You merge the PR when ready

### Method 2: Local Intake (For Testing)

```bash
# Place PDF in inbox
cp document.pdf _inbox/mer-l-002371-25/

# Run intake script locally
node scripts/docket-intake.js

# Commit the results
git add . && git commit -m "intake: process new filing" && git push
```

---

## ✏️ Manual PDF Entry

If you prefer to add PDFs manually:

### Step 1: Add PDF to filings directory

```bash
cp my-document.pdf cases/mer-l-002371-25/filings/20251228-document-title.pdf
```

### Step 2: Edit docket YAML

Add entry to `_data/docket/mer-l-002371-25.yml`:

```yaml
- id: 2025-12-28-document-title
  date: '2025-12-28'
  type: Filing  # or Order, Motion, Complaint, Certification, etc.
  title: Human-Readable Document Title
  file: /cases/mer-l-002371-25/filings/20251228-document-title.pdf
  notes: Optional notes about this filing
```

### Valid Document Types:

- `Filing` - General court filings
- `Order` - Court orders
- `Notice` - Notices from court
- `Brief` - Legal briefs
- `Exhibit` - Evidence exhibits
- `Motion` - Motions to the court
- `Complaint` - Complaints and amended complaints
- `Proposed Order` - Submitted draft orders
- `Proof of Service` - Service certifications
- `Request` - Formal requests
- `Certification` - Sworn statements

---

## 🔍 Validate Case Integrity

After adding new PDFs, validate:

```bash
# Check specific case
node scripts/validate-case-integrity.js

# Check docket YAML format
node scripts/validate-docket-files.js

# Rebuild site
bundle exec jekyll build
```

---

## 📋 Current Docket Status

**Total Entries:** 20  
**Date Range:** 2025-10-29 to 2025-12-16

### Key Filings:

- **2025-10-29:** Verified Complaint (initial filing)
- **2025-11-13:** Fee waiver denied
- **2025-12-05:** Fee waiver granted
- **2025-12-16:** Latest filing

### Document Breakdown:

- Orders: 3
- Complaints: 2
- Motions: 4
- Proofs of Service: 4
- General Filings: 6
- Certification: 1

---

## 🎯 Intake Workflow Examples

### Example 1: Batch PDF Upload (Production Workflow)

```bash
# Step 1: Copy multiple PDFs to case inbox
cp ~/Downloads/*.pdf _inbox/mer-l-002371-25/

# Step 2: Commit and push to GitHub
git add _inbox/mer-l-002371-25/
git commit -m "intake: MER-L-002371-25 batch upload - Dec filings"
git push

# Step 3: GitHub Actions processes automatically
# - Creates PR with processed files
# - You review and merge
```

### Example 2: Single PDF with Quick Intake

```bash
# Copy to case inbox
cp new-motion.pdf _inbox/mer-l-002371-25/20251228-motion-to-dismiss.pdf

# Push to GitHub
git add _inbox/mer-l-002371-25/ && git commit -m "intake: motion to dismiss" && git push

# GitHub Actions handles the rest
```

### Example 3: Local Testing (Before Pushing)

```bash
# Copy PDF to inbox
cp document.pdf _inbox/mer-l-002371-25/

# Run intake locally to test
node scripts/docket-intake.js

# If looks good, commit
git add . && git commit -m "intake: new filing" && git push
```

---

## 🌐 View Case Online

Once built, case will be available at:
- **Local:** http://localhost:4000/cases/mer-l-002371-25/
- **Production:** https://faithfrontier.org/cases/mer-l-002371-25/

---

## 🔧 Troubleshooting

### PDFs not showing up?

1. Check docket YAML path matches actual file:
   ```yaml
   file: /cases/mer-l-002371-25/filings/20251228-doc.pdf
   ```

2. Verify PDF exists:
   ```bash
   ls cases/mer-l-002371-25/filings/
   ```

3. Rebuild site:
   ```bash
   bundle exec jekyll build
   ```

### Intake script not finding case?

1. Verify cases-map.yml has entry:
   ```yaml
   MER-L-002371-25: mer-l-002371-25
   ```

2. Check filename includes docket number:
   ```
   MER-L-002371-25_document.pdf
   ```

### Build errors?

1. Validate YAML syntax:
   ```bash
   node scripts/validate-docket-files.js
   ```

2. Check front matter in case file:
   ```bash
   head -30 _cases/mer-l-002371-25/index.md
   ```

---

## 📚 Additional Resources

- **Docket System Documentation:** `/DOCKET-SYSTEM.md`
- **Validation Scripts:** `/scripts/validate-*.js`
- **Intake Documentation:** `/scripts/docket-intake.js`
- **Case Template:** `/_cases/_TEMPLATE.md`

---

## ✅ Next Steps

Your case is now fully set up and ready for:

1. ✅ Automated PDF intake via `_inbox/`
2. ✅ Manual PDF additions to `filings/`
3. ✅ Displaying on website at `/cases/mer-l-002371-25/`
4. ✅ Validation and integrity checking
5. ✅ Building and deployment

**No additional configuration required!**

---

*Setup completed: 2025-12-28*  
*Case status: READY FOR INTAKE*
