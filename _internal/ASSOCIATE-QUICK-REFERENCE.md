# Amazon Associates Quick Reference Card

## Purpose
Support Faith Frontier's HTML development fund through curated product recommendations that help clients get project essentials and helpful products.

## Product Categories & Count

### Faith (2 products)
- Geneva Bible 1560 Facsimile
- Geneva Bible 1560 Complete with Apocrypha

### Health & Wellness (13 products)
- Bioactive Colloidal Silver (30 PPM)
- X12 Ormus Monoatomic Gold
- Sovereign Copper Hydrosol
- Sovereign Silver Hydrosol (10 PPM)
- Pure Himalayan Shilajit Resin
- Organic Irish Moss
- Pure Copper Water Bottle (34oz)
- Hammered Copper Tumblers (Set of 2)
- Tongkat Ali Fadogia Agrestis
- Youtheory Ashwagandha
- Naturealm Sacred 7 Mushrooms
- Ancient Nutrition Mushroom Tablets

### Homestead (3 products)
- Bedsure Linen Sheets (Queen)
- Grounding Mat for Bed
- Amazon Basics Cast Iron Set (5 pieces)

### Gold & Wearables (2 products)
- Nuragold 18k Gold Rope Chain
- Ross-Simons 14k Gold Rope Chain

### Empty Categories (Ready for Expansion)
- Tools & Equipment
- Books & Education
- Legal & Documentation

## Total: 20 Products Active

## Key Files
- **Data Source**: `_data/stewardship-resources.yml`
- **Display Page**: `_pages/stewardship-resources.md`
- **Backup Data**: `_data/associate-products.yml`
- **Migration Doc**: `_internal/ASSOCIATE-PRODUCTS-MIGRATION-SUMMARY.md`

## How Revenue Supports Mission
- Web development & hosting
- Technology infrastructure
- Automated docket systems
- Public-record transparency
- Community resources

## Legal Compliance
✅ Amazon Associates disclosure on page  
✅ Personal recommendations only  
✅ No medical/legal advice  
✅ Individual discernment required  
✅ Compliant with `.ai/` governance  

## Adding New Products

1. Get Amazon Associates link from Central
2. Add to appropriate category in `_data/stewardship-resources.yml`
3. Use proper YAML schema (id, title, description, url, category, tags, date, note)
4. Test locally: `bundle exec jekyll serve`
5. Commit: `git commit -m "feat(resources): add [product name]"`

## Quick Stats
- **Categories**: 7 total (4 active, 3 empty)
- **Products Per Category**: Faith(2), Health(13), Homestead(3), Gold(2)
- **Last Updated**: 2025-12-20
- **Status**: ✅ Ready for deployment

---

**Remember**: These are personal recommendations to support the mission, not professional advice. Always consult qualified professionals for health, legal, or financial guidance.
