# RRInvite - Rithika's Rangapravesham

An elegant, Indian-themed interactive invitation website for Rithika's Rangapravesham celebration. Features include a beautiful flip card invite, RSVP functionality, guest tracking, and an admin dashboard.

## Features

✨ **Beautiful Design**
- Soft color palette: teal, muted brown, soft pink, and white
- Decorative mandala and lotus designs
- Krishna and Ganesh motifs
- Fancy Indian fonts (Cormorant Garamond, Playfair Display, Crimson Text)

🎫 **Interactive Invite**
- Flip card that animates on click
- Detailed invite information cards
- Responsive design for all devices

📋 **RSVP System**
- Yes/No response buttons
- Guest count input for confirmations
- Comment field for both responses
- Instant guest list updates

👥 **Guest Management**
- Public guest list page
- Admin dashboard with password protection
- View individual guest details and comments
- Track total guest count

## Tech Stack

- **Frontend**: Next.js 13+ with TypeScript and React
- **Styling**: Tailwind CSS with custom CSS for animations
- **Backend**: Next.js API Routes
- **Database**: In-memory storage (easily upgradeable to PostgreSQL/MongoDB)
- **Deployment**: Vercel-ready

## Getting Started

### Prerequisites
- Node.js 16+ and npm

### Installation

1. **Clone and install dependencies**
   ```bash
   npm install
   ```

2. **Create environment file** (optional - defaults provided)
   ```bash
   cp .env.example .env.local
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:3000
   ```

### Build for Production

```bash
npm run build
npm start
```

## Usage

### Main Invite Page
- **URL**: `/`
- Users view the beautiful invite and RSVP
- Responsive flip card for invite details
- Step-by-step RSVP form

### Guest List Page
- **URL**: `/guests`
- Public view of confirmed attendees
- Shows names and guest counts
- Updates in real-time as RSVPs come in

### Admin Dashboard
- **URL**: `/admin`
- Password-protected dashboard
- Default password: `rangapravesham2024` (change in `.env.local`)
- View all responses (attending and declining)
- See guest counts and comments
- Analyze RSVP statistics

## Customization

### Update Invite Details
Edit `/pages/index.tsx` and update the `InviteDetails` component:

```tsx
<InviteDetails
  date="Saturday, June 10, 2024"
  time="6:00 PM"
  location="The Grand Hall, City Name"
  attire="Traditional"
/>
```

### Change Admin Password
Edit `.env.local`:
```
ADMIN_PASSWORD=your-new-password
```

### Customize Colors
Edit `/styles/globals.css` and update the CSS variables:
```css
:root {
  --teal: #a8d5d5;
  --brown: #8b7b7b;
  --pink: #d4a5a5;
  --white: #f8f8f8;
}
```

### Customize Fonts
The app uses Google Fonts. Edit `/styles/globals.css` to change font imports.

## Deployment to Vercel

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit: Rithika's Rangapravesham invite"
   git push origin main
   ```

2. **Deploy to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Import your repository
   - Add environment variable: `ADMIN_PASSWORD`
   - Deploy!

Your invite will be live at your Vercel domain.

## API Endpoints

### POST `/api/rsvp`
Submit an RSVP response

**Request body:**
```json
{
  "name": "John Doe",
  "attending": true,
  "numGuests": 2,
  "comments": "Looking forward to it!"
}
```

### GET `/api/guests`
Get list of confirmed attendees

### GET `/api/admin/guests?password=YOUR_PASSWORD`
Get admin statistics and all responses (password-protected)

## Future Enhancements

- Database integration (PostgreSQL/MongoDB)
- Email notifications for RSVP submissions
- QR code for easy mobile access
- Photo gallery
- Seating arrangements
- Dietary preferences tracking
- Payment integration for events with registration fees

## License

MIT

## Contact

For questions or support, please reach out to the event organizers.

---

Made with ❤️ for Rithika's Rangapravesham