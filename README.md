# PortalFlow  

PortalFlow is a user and document management system designed to provide a seamless interaction between administrators and users.  

## Features  
- Admin panel for managing users, transactions, and articles.  
- User portal for accessing personal documents and reports.  
- RESTful API for smooth data exchange.  
- Multi-purpose design, usable in various domains.  

## Technologies Used  
### Backend  
- fast api: RESTful API for data management.  
### Frontend  
- Admin Panel: next.js  
- User Panel: next.js 
### Database  
- MySQL  

## Folder Structure
```
PortalFlow/
├── backend/         # fast api project for RESTful API
├── admin-panel/     # next.js admin panel
├── user-panel/      # next.js for user portal
└── README.md        # Project documentation
```
## Installation  
### Prerequisites  
- Docker
- Docker Compose 

### Steps  
1. Clone the repository:

git clone https://github.com/your-username/PortalFlow.git
cd PortalFlow


2. Build and run the project using Docker Compose:

docker-compose up --build


3. Access the application:

Admin Panel: http://localhost:3000

User Panel: http://localhost:8080 (or the static files served locally)


---

Checklist of Tasks and Features

Setup

[ ] Set up fast api backend with basic RESTful routes.

[ ] Configure MySQL database.

[ ] Build a next.js admin panel.

[*] Design the user panel with HTML/CSS/JavaScript.


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
