# Project Context Directory

**Purpose:** Complete session history and reference for future development sessions.

---

## 📚 Files in This Directory

### 1. `SESSION_SUMMARY.md`
**What:** Complete chronological summary of entire development session  
**Contains:**
- Timeline with WIB timestamps
- All decisions made
- All issues encountered and fixed
- Complete project structure
- Current status

**Use When:** You need full context of what happened in previous session

---

### 2. `TECHNICAL_DECISIONS.md`
**What:** Detailed log of all technical decisions with rationale  
**Contains:**
- Why we chose each technology
- Why we changed approaches
- Alternatives considered
- Reasons for rejections

**Use When:** You need to understand WHY something was done a certain way

---

### 3. `QUICK_REFERENCE.md`
**What:** Cheat sheet for quick access  
**Contains:**
- Essential info table
- Design quick reference
- Common pitfalls (DO/DON'T)
- Component locations
- Page routes
- Deployment checklist

**Use When:** Starting a new session, need quick access to key info

---

### 4. `COMPONENT_INVENTORY.md`
**What:** Complete list of all components with status  
**Contains:**
- All components organized by type
- Feature descriptions
- File locations
- Data files
- CSS architecture
- Unused files

**Use When:** You need to find a specific component or check what exists

---

## 🔄 How to Use These Files

### Starting a New Session:
1. Read `QUICK_REFERENCE.md` first (5 min)
2. Read `SESSION_SUMMARY.md` for full context (10 min)
3. Check `TECHNICAL_DECISIONS.md` if making related changes
4. Check `COMPONENT_INVENTORY.md` before creating new components

### When Making Changes:
1. Check `QUICK_REFERENCE.md` for pitfalls to avoid
2. Check `COMPONENT_INVENTORY.md` to see if component exists
3. Check `TECHNICAL_DECISIONS.md` to understand existing patterns
4. Update these files after making significant changes

### When Deploying:
1. Follow checklist in `QUICK_REFERENCE.md`
2. Check `SESSION_SUMMARY.md` for known deployment issues
3. Refer to `/CLOUDFLARE_FIXES.md` if build fails

---

## 📝 Maintenance

**Update these files when:**
- New components created
- Major decisions made
- New issues discovered
- Project structure changes
- Session ends

**How to Update:**
- Add new entries with timestamps (WIB timezone)
- Don't delete old entries, mark as "SUPERSEDED" if needed
- Keep chronological order

---

## 🕐 Timezone

All timestamps in these files use **WIB (Western Indonesian Time, UTC+7)**  
Jakarta time zone.

---

*Directory created: 8 April 2026, 03:00 WIB*  
*Keep this directory updated throughout project lifecycle.*
