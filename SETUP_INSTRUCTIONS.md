# 
**Your beautiful invitation website is ready!** This file contains the essential steps to get started.

 Quick Start (15 minutes)## 

### Step 1: Test Locally
```bash
npm run dev
```
Open: http://localhost:3000

### Step 2: Customize Event Details
Edit `pages/index.tsx` around line 50:
```tsx
<InviteDetails
  date="Saturday, June 15,  CHANGE THIS2024"  // 
  time="6:00 PM  CHANGE THIS  onwards"          // 
  location="The Grand Ballroom,  CHANGE THISMumbai"  // 
  attire="Traditional"
/>
```

### Step 3: Deploy to Vercel
1. Push to GitHub
 Import repository
3. Add environment variable: `ADMIN_PASSWORD`
4. Deploy!

## 
| File | Purpose | Change? |
|------|---------|---------|
|  | Main invite page |  Update date/time/location |
| `.env.local` |  Change admin password |Configuration | 
| `README.md` | Full documentation | | `styles/globals.css` | Colors & fonts | 
## 
Share this URL with guests: `https://your-vercel-domain.app`

**Guest experiences:**
- View beautiful invitation
- Click flip card to see details
- RSVP with Yes/No
- Specify number of guests
- Leave comments
- See other confirmed guests

**You can access:**
- Admin: `https://your-domain.app/admin`
- Password: (your ADMIN_PASSWORD)
- View: All RSVPs, guest counts, comments

## 
### Colors
Edit `styles/globals.css` (lines 4-9):
```css
:root {
  --teal: #a8d5d5;    /* Primary */
  --brown: #8b7b7b;   /* Text */
  --pink: #d4a5a5;    /* Accent */
  --white: #f8f8f8;   /* Background */
}
```

### Fonts
Edit `styles/globals.css` line 11 to use different [Google Fonts](https://fonts.google.com)

### Admin Password
Edit `.env.local`:
```
ADMIN_PASSWORD=your-secure-password
```

Then set same value in Vercel dashboard.

##  Testing Checklist

- [ ] Local test: `npm run dev` works
- [ ] Main page loads beautifully
- [ ] Flip card animation works
- [ ] RSVP form submission works
- [ ] Guest list page updates
- [ ] Admin login works
- [ ] Mobile responsive (test on phone)
- [ ] Build passes: `npm run build`
- [ ] Ready to deploy!

## 
For comprehensive guides, see:
- **GETTING_STARTED.md** - Complete walkthrough
- **PROJECT_SUMMARY.md** - Feature overview
- **DEPLOYMENT_GUIDE.md** - Detailed deployment
- **QUICK_CHECKLIST.md** - Pre-launch checklist
- **README.md** - Full technical docs

## 
**Admin login not working?**
- Check `.env.local` password
- Verify ADMIN_PASSWORD set in Vercel
- Wait a few minutes after deployment

**Styling looks wrong?**
- Clear browser cache (Cmd+Shift+Delete)
- Hard refresh (Cmd+Shift+R)

**Build fails?**
- Run `npm run build` to see errors
- Check TypeScript: `npm run lint`

## 
Before going live:
- [ ] Event details updated
- [ ] Admin password changed (optional)
- [ ] Tested locally and it works
- [ ] Build passes (`npm run build`)
- [ ] Pushed to GitHub
- [ ] Added ADMIN_PASSWORD to Vercel
- [ ] Deployment successful

## 
```bash
npm run dev

# In browser:
http://localhost:3000/              # Main invite
http://localhost:3000/guests         # Guest list
http://localhost:3000/admin          # Admin (pass: rangapravesham2024)
```

## 
Your invitation is complete and ready to deploy. Follow the Quick Start section above and you'll be live in minutes!

---

**Questions?** See README.md or the documentation files in the session folder.

**Ready?** Run `npm run dev` and start customizing!
