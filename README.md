# PortalFlow  

PortalFlow is a user and document management system designed to provide a seamless interaction between administrators and users.  

## Features  
- Admin panel for managing users, transactions, and articles.  
- User portal for accessing personal documents and reports.  
- RESTful API for smooth data exchange.  
- Multi-purpose design, usable in various domains.  

## Technologies Used  
### Backend  
- Laravel: RESTful API for data management.  
### Frontend  
- Admin Panel: React.js  
- User Panel: HTML, CSS, JavaScript (Fetch API)  
### Database  
- MySQL  

## Folder Structure

PortalFlow/
├── backend/         # Laravel project for RESTful API
├── admin-panel/     # React.js admin panel
├── user-panel/      # HTML/CSS/JS for user portal
└── README.md        # Project documentation

## Installation  
### Prerequisites  
- PHP >= 8.1  
- Node.js >= 16  
- Composer  
- MySQL  

### Steps  
1. Clone the repository:  
   `bash
   git clone https://github.com/your-username/PortalFlow.git

2. Set up the backend:

cd backend  
composer install  
cp .env.example .env  
php artisan key:generate  
php artisan migrate


3. Set up the admin panel:

cd ../admin-panel  
npm install  
npm start


4. Open the user panel:
Serve index.html in the user-panel folder using any local server.




---

Checklist of Tasks and Features

Setup

[ ] Set up Laravel backend with basic RESTful routes.

[ ] Configure MySQL database.

[ ] Build a React.js admin panel.

[ ] Design the user panel with HTML/CSS/JavaScript.


Admin Panel Features

[ ] User management: Add, update, delete users.

[ ] Transaction management: Log transactions for projects.

[ ] Article management: Add and publish articles.


User Panel Features

[ ] Login with phone number.

[ ] View personal documents and reports.

[ ] Access published articles.


API Development

[ ] Create RESTful endpoints for:

[ ] User authentication.

[ ] Document retrieval.

[ ] Transaction logging.



Testing

[ ] Test backend API with Postman.

[ ] Test admin panel functionality.

[ ] Test user panel interactions.
