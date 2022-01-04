# Project REST-Rant
 -GET   /   Home page
 -GET   /PLACES Places index page
-POST   /PLACES Create new place
 -GET   /PLACES//NEW    Form page for creating a new place
 -GET   /PLACES/:ID Details about a particular place
-PUT    /PLACES/:ID Update a particular place
-GET    /PLACES/:ID/EDIT    Form page for editing an existing place
-DELETE /PLACES/:ID Delete a particular place
-POST   /PLACES/:ID/RANT    Create a rant (comment) about a particular place
-DELETE /PLACES/:ID/RANT/:RANTID    Delete a rant (comment) about a particular place
-GET    *   404 page (matches any route not defined above)
REST-Rant is an app where users can review restaurants.