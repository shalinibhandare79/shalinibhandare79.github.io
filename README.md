# Contact Information

### Folder Structure

The designed application is used for maintaining contact information. Folder structure of the application is as below:

    .
    ├── Scripts                    # Controller and module files
    ├──  Templates                 # HTML files(index.html,list.html)
    ├──  Media                     # image, JSON file
    ├──  styles                    # CSS files(contact.css)
    ├──  README.md                 
 		     


### Setup Prerequisites

- Following tools are recommended to run Contact Information Application:
  - [JAVA/JDK8]
  - [Visual studio] or any editor
  - [XAMPP](https://www.apachefriends.org/index.html)
  - [NPM]

### Running

- After successfully installing required softwares, download the entire folder structure.
- Start Apache server by using XAMPP control panel.
- Copy entire folder into ‘XAMPP/htdocs’folder.
- Go to templates folder(contact_Information) and run the index.html by using following url: 
(http://localhost/contact_Information/templates/index.html#!/list).

### Contact Fields
- A contact has following attributes in this application. Asterisk (\*)  indicates fields which are mandatory for contact creation.

    - First Name(*)              
    - Last Name                 
    - Email Address                     
    - Phone number(*)                    
    - Secondary phone number                 
    - Status (Active/ Inactive)
    - Favourite (Yes/No)


### Application Overview

- After browsing an application you will navigate to ‘Home page’ of Contact information.

- It consists of following functionalities:
  1. List of Contacts: 
	On home page, all existing contacts are shown in form of cards having view, edit and delete functionalities.
			
  2. Add contact: 
	Add New Contact button on top left corner will pop up add new contact form. Add new contact button will be enabled only 	after entering mandatory fields.

  3. View contact: 
	View button on contact card will give entire information of selected contact.

  4. Edit contact: 
	Edit button on contact card can be used to edit the information of selected contact.

  5. Delete contact: 
	Delete button can be used to remove the selected contact information.

  6. Favourites: 
	Favourite button on the top left corner can be used to show only favourite contacts.
	The same button can be used to show all contacts again.

  7. Search: 
	Users can be searched based on first name and or last name.
	To return back to all contact list from search, search button should be used by removing search criteria.



