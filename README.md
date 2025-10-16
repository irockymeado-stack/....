<div align="center">
  <img src="https://i.ibb.co/nsymNz8D/OIP.webp" alt="RJB TRANZ Logo" width="120"/>

  # RJB TRANZ Currency Exchange CRM

  ### Professional Desktop Application for Currency Exchange Management

  [![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)](https://github.com/rjbtranz/exchange)
  [![React](https://img.shields.io/badge/React-19-61DAFB?logo=react)](https://react.dev)
  [![Electron](https://img.shields.io/badge/Electron-38-47848F?logo=electron)](https://electronjs.org)
  [![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?logo=typescript)](https://www.typescriptlang.org)
  [![License](https://img.shields.io/badge/license-MIT-green.svg)](LICENSE)
</div>

---

## Overview

**RJB TRANZ** is a comprehensive desktop CRM application designed specifically for currency exchange businesses. Built with modern web technologies and packaged as a native desktop application, it provides a seamless, professional solution for managing transactions, clients, invoices, and live exchange rates across 70+ currencies.

### Key Highlights

- **Native Desktop Experience** - Cross-platform support (Windows, macOS, Linux)
- **Real-Time Exchange Rates** - Live rates for 70+ global currencies
- **Comprehensive CRM** - Complete client and transaction management
- **Professional Invoicing** - Automated invoice generation and tracking
- **Thermal Printing** - Direct integration with receipt printers
- **Analytics Dashboard** - Business insights and reporting
- **Offline Capable** - Works without internet connection
- **Secure** - Built-in authentication and data encryption

---

## Features

### Transaction Management
- Create, track, and manage currency exchange transactions
- Support for buy, sell, and exchange operations
- Real-time rate calculations with commission tracking
- Transaction history with advanced search and filtering
- Status tracking (pending, completed, cancelled)
- Reference number generation for audit trails

### Client Management (CRM)
- Comprehensive client profiles with contact information
- Transaction history per client
- Client tier classification (Standard, Premium, VIP)
- Notes and communication logs
- Document attachment storage
- Client analytics and lifetime value tracking

### Invoice System
- Professional invoice generation
- Automatic invoice numbering
- Multi-transaction invoicing
- Status workflow (draft, sent, paid, overdue)
- PDF export functionality
- Email integration
- Due date tracking and payment reminders

### Live Exchange Rates
- Real-time rates for 70+ currencies
- 24-hour change tracking with percentage indicators
- Regional filtering (Africa, Asia, Europe, Americas, Oceania, Middle East)
- Favorite currencies for quick access
- Auto-refresh every 30 seconds
- Historical rate data

### Analytics Dashboard
- **Revenue Metrics** - Total revenue with growth tracking
- **Transaction Volume** - Daily/monthly transaction statistics
- **Success Rate** - Conversion and completion analytics
- **Client Insights** - Customer acquisition and retention metrics
- **Top Currency Pairs** - Most traded currency combinations
- **Trend Analysis** - Business performance over time
- **Revenue per Client** - Average lifetime value calculations

### Auto Conversions Widget
- Quick currency pair conversions
- Customizable conversion amounts
- Live rate updates with percentage changes
- Toggle visibility for specific pairs
- Add/remove conversion pairs on the fly
- Visual indicators for rate movements

### Receipt Printing
- Thermal printer integration (ESC/POS compatible)
- Professional receipt templates
- Automatic print on transaction completion
- Print queue management
- Paper level monitoring
- Printer status detection

### System Features
- **User Authentication** - Secure email/password login with Supabase Auth
- **Role-Based Access** - Admin, Operator, and Viewer permissions
- **Keyboard Shortcuts** - Quick access to common operations
- **Menu Bar Integration** - Native OS menu with actions
- **System Notifications** - Important alerts and reminders
- **Data Export** - CSV/Excel export for reports
- **Auto-Updates** - Automatic application updates
- **Dark/Light Theme** - Comfortable viewing modes

---

## Screenshots

### Dashboard
<img src="docs/screenshots/dashboard.png" alt="Dashboard" width="800"/>

*Main dashboard with revenue metrics, auto conversions, recent transactions, and system status*

### Countries & Exchange Rates
<img src="docs/screenshots/countries.png" alt="Countries Page" width="800"/>

*Browse and search 70+ currencies with real-time exchange rates and regional filters*

### Transactions
<img src="docs/screenshots/transactions.png" alt="Transactions Page" width="800"/>

*Manage all currency exchange transactions with advanced filtering*

---

## Installation

### For End Users

#### Windows
1. Download `RJB-TRANZ-Setup-1.0.0.exe` from the [Releases](https://github.com/rjbtranz/exchange/releases) page
2. Run the installer
3. Launch RJB TRANZ from the Start Menu
4. Sign in with your credentials

#### macOS
1. Download `RJB-TRANZ-1.0.0.dmg` from the [Releases](https://github.com/rjbtranz/exchange/releases) page
2. Open the DMG file
3. Drag RJB TRANZ to Applications folder
4. Launch from Applications
5. If prompted about unidentified developer, go to System Preferences → Security & Privacy → Open Anyway

#### Linux
1. Download `RJB-TRANZ-1.0.0.AppImage` from the [Releases](https://github.com/rjbtranz/exchange/releases) page
2. Make it executable: `chmod +x RJB-TRANZ-1.0.0.AppImage`
3. Run the AppImage
4. Or use the .deb package: `sudo dpkg -i rjb-tranz-1.0.0.deb`

---

## System Requirements

### Minimum Requirements
- **OS**: Windows 10/11, macOS 10.13+, or Linux (Ubuntu 18.04+, Debian 10+, Fedora 32+)
- **RAM**: 4 GB
- **Storage**: 500 MB available space
- **Display**: 1280x720 resolution
- **Internet**: Required for initial setup and rate updates (offline mode available)

### Recommended Requirements
- **OS**: Windows 11, macOS 12+, or latest Linux distribution
- **RAM**: 8 GB or more
- **Storage**: 1 GB available space
- **Display**: 1920x1080 resolution or higher
- **Internet**: Broadband connection for optimal performance
- **Printer**: ESC/POS compatible thermal printer (optional)

---

## Development Setup

### Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** 18.x or higher ([Download](https://nodejs.org))
- **npm** 9.x or higher (comes with Node.js)
- **Git** ([Download](https://git-scm.com))

### Clone the Repository

```bash
git clone https://github.com/rjbtranz/exchange.git
cd exchange
```

### Install Dependencies

```bash
npm install
```

### Environment Configuration

Create a `.env` file in the root directory:

```env
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### Run Development Server

```bash
# Web development mode
npm run dev

# Electron development mode
npm run electron:dev
```

The web app will be available at `http://localhost:5173`

### Build for Production

```bash
# Build web assets
npm run build

# Build desktop application
npm run electron:build
```

Build artifacts will be in the `release` directory.

### Project Structure

```
rjb-tranz-exchange/
├── electron/              # Electron main process
│   └── main.js           # Application entry point
├── src/
│   ├── components/       # Reusable React components
│   │   └── Layout.tsx    # Main layout with navigation
│   ├── pages/            # Page components
│   │   ├── Dashboard.tsx
│   │   ├── Transactions.tsx
│   │   ├── Invoices.tsx
│   │   ├── Countries.tsx
│   │   ├── Converter.tsx
│   │   └── AuthPage.tsx
│   ├── lib/              # Utility libraries
│   │   └── supabase.ts   # Supabase client
│   ├── hooks/            # Custom React hooks
│   ├── utils/            # Helper functions
│   ├── types/            # TypeScript types
│   ├── App.tsx           # Root component
│   ├── main.tsx          # React entry point
│   └── index.css         # Global styles
├── public/               # Static assets
├── dist/                 # Build output
├── release/              # Electron build output
├── package.json
├── tsconfig.json
├── vite.config.ts
└── tailwind.config.js
```

---

## Usage Guide

### Getting Started

1. **Launch the Application**
   - Open RJB TRANZ from your applications menu
   - You'll be greeted with the login screen

2. **Sign In**
   - Enter your email and password
   - Or create a new account if you're a first-time user

3. **Dashboard Overview**
   - View key metrics: Revenue, Transaction Volume, Growth
   - Monitor auto conversions with live rates
   - Check recent transactions and system status

### Creating a Transaction

1. Navigate to the **Transactions** page
2. Click **New Transaction** button
3. Fill in the details:
   - Select client (or create new)
   - Choose transaction type (Buy/Sell/Exchange)
   - Enter currency pair and amounts
   - Rate is calculated automatically
   - Add commission if applicable
4. Review the summary
5. Click **Complete Transaction**
6. Receipt can be printed automatically

### Managing Clients

1. Go to **Clients** section (via Transactions page)
2. Add new clients with contact information
3. View client transaction history
4. Track client tiers and lifetime value
5. Add notes and attachments

### Generating Invoices

1. Navigate to **Invoices** page
2. Click **Create Invoice**
3. Select client and transaction(s)
4. Review invoice details
5. Set due date
6. Generate and send PDF

### Monitoring Exchange Rates

1. Visit the **Countries** page
2. Browse all 70+ supported currencies
3. Filter by region using the tabs
4. Search for specific currencies
5. Mark favorites for quick access
6. Click **Refresh** for latest rates

### Using Auto Conversions

1. From the Dashboard, locate the **Auto Conversions** widget
2. View your preset currency pairs
3. Click **Add Conversion Pair** to add new pairs
4. Toggle visibility using the eye icon
5. Remove pairs with the X button
6. Rates update automatically every 30 seconds

### Keyboard Shortcuts

- `Ctrl/Cmd + N` - New Transaction
- `Ctrl/Cmd + E` - Export Data
- `Ctrl/Cmd + P` - Print Receipt
- `Ctrl/Cmd + Q` - Quit Application
- `Ctrl/Cmd + R` - Refresh Rates
- `F11` - Toggle Fullscreen

---

## Database Schema

The application uses Supabase (PostgreSQL) with the following main tables:

### Tables

- **clients** - Customer information and profiles
- **transactions** - Currency exchange transaction records
- **invoices** - Invoice generation and tracking
- **exchange_rates** - Historical rate data
- **receipts** - Printed receipt records

### Security

- Row Level Security (RLS) enabled on all tables
- Authenticated users can only access their organization's data
- Admin role required for system settings
- Encrypted connections for all database operations

---

## API Integration

### Exchange Rate Provider

The application fetches live exchange rates from multiple sources:

- Primary: exchangerate-api.io
- Fallback: fixer.io
- Local cache for offline mode

### Supabase Services

- **Authentication** - User login and session management
- **Database** - Real-time data synchronization
- **Storage** - Document and attachment storage (future feature)

---

## Thermal Printer Setup

### Supported Printers

- Any ESC/POS compatible thermal printer
- USB or Network connection
- Recommended: 80mm paper width

### Configuration

1. Connect your thermal printer
2. Go to **Settings** → **Printer**
3. Select your printer from the list
4. Test print to verify
5. Configure paper size and margins
6. Enable auto-print if desired

---

## Troubleshooting

### Application Won't Start

- Ensure system requirements are met
- Try running as administrator (Windows) or with elevated permissions
- Check antivirus software isn't blocking the app
- Reinstall the application

### Can't Connect to Database

- Check your internet connection
- Verify `.env` file has correct Supabase credentials
- Ensure Supabase project is active
- Check firewall settings

### Printer Not Detected

- Verify printer is powered on and connected
- Install printer drivers
- Check USB/Network connection
- Try a different USB port
- Restart the application

### Exchange Rates Not Updating

- Check internet connection
- Verify API key is valid
- Manual refresh using the refresh button
- Check if rate limit has been exceeded

### Performance Issues

- Close unnecessary applications
- Clear application cache
- Reduce number of active conversion pairs
- Update to latest version

---

## Contributing

We welcome contributions from the community! Here's how you can help:

### Reporting Bugs

1. Check if the bug has already been reported in [Issues](https://github.com/rjbtranz/exchange/issues)
2. If not, create a new issue with:
   - Clear title and description
   - Steps to reproduce
   - Expected vs actual behavior
   - Screenshots if applicable
   - System information

### Suggesting Features

1. Open an issue with the `enhancement` label
2. Describe the feature and its benefits
3. Provide use cases and examples
4. Be open to discussion and feedback

### Pull Requests

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Write or update tests
5. Commit your changes (`git commit -m 'Add amazing feature'`)
6. Push to the branch (`git push origin feature/amazing-feature`)
7. Open a Pull Request

### Coding Standards

- Follow TypeScript best practices
- Use meaningful variable and function names
- Add comments for complex logic
- Maintain consistent code style
- Write tests for new features
- Update documentation

---

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

```
MIT License

Copyright (c) 2025 RJB TRANZ

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

---

## Support

### Documentation

- [User Guide](docs/user-guide.md)
- [Developer Documentation](docs/developer-guide.md)
- [API Reference](docs/api-reference.md)
- [FAQ](docs/faq.md)

### Getting Help

- **Email**: support@rjbtranz.com
- **Discord**: [Join our community](https://discord.gg/rjbtranz)
- **Twitter**: [@rjbtranz](https://twitter.com/rjbtranz)
- **GitHub Issues**: [Report bugs or request features](https://github.com/rjbtranz/exchange/issues)

### Commercial Support

For enterprise support, custom development, or training:
- Email: enterprise@rjbtranz.com
- Phone: +1 (555) 123-4567

---

## Changelog

### Version 1.0.0 (2025-10-16)

**Initial Release**

- Core transaction management system
- Client CRM functionality
- Invoice generation and tracking
- Live exchange rates for 70+ currencies
- Auto conversions widget
- Analytics dashboard with business metrics
- Thermal printer integration
- Cross-platform desktop application (Windows, macOS, Linux)
- Supabase authentication and database
- Offline mode capability
- Professional UI with hover effects and animations
- Comprehensive search and filtering
- Data export functionality

---

## Acknowledgments

- [React](https://react.dev) - UI framework
- [Electron](https://electronjs.org) - Desktop application wrapper
- [Supabase](https://supabase.com) - Backend as a service
- [Tailwind CSS](https://tailwindcss.com) - Utility-first CSS framework
- [Lucide Icons](https://lucide.dev) - Beautiful icon set
- [Vite](https://vitejs.dev) - Build tool
- [TypeScript](https://www.typescriptlang.org) - Type-safe JavaScript

---

## Roadmap

### Upcoming Features

- **Mobile App** - iOS and Android companion apps
- **Multi-Currency Wallet** - Manage multiple currency balances
- **Advanced Analytics** - Predictive analytics and forecasting
- **Email Notifications** - Automated client communications
- **Report Builder** - Custom report generation
- **API Access** - RESTful API for integrations
- **Multi-Language** - Internationalization support
- **Cloud Sync** - Sync data across devices
- **Backup/Restore** - Automated backup system
- **Audit Trail** - Complete activity logging

### Long-Term Vision

- Expand to full financial services platform
- Integration with banking systems
- Compliance and regulatory reporting
- White-label solution for other businesses
- Machine learning for fraud detection

---

<div align="center">

  **Made with ❤️ by RJB TRANZ Team**

  [Website](https://rjbtranz.com) • [Documentation](https://docs.rjbtranz.com) • [Support](https://support.rjbtranz.com)

</div>
