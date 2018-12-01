# Project1 

1. PROJECT NAME 
   Venue 4 You

2. PROBLEM TO SOLVE
   a. Difficulty Faced By Venue OwnersTurning a profit during low volume days/times, which can be common for businesses like...
        Bars/Restaurants
        Catering Venues

   b. Difficulty Faced By Event Space Seekers: Locating event space for group events that can... 
        Vary in size
        Have specific space requirements
        Be in need of larger space due to unexpected increase in attendees
 
3. HOW IT WORKS:
   The site consists of three page: (1) home page (2) venue owner page, (3) event space seeker page.
   (1) Home page: Provides two clickable images, left image takes visitor to the venue owner page, 
       right image takes site vistor to the page to search for available venue spaces.
   (2) Venue owner page: Venue owner will submit all required details, which will be saved to firebase with Lat/Long info.
       NOTE: In order for this to work, you must enter ONLY the street address and zip code on this page.
       The street address you choose must be a real address located within New York, NY and the zip code entered cannot exceed 5 digits. 
   (3) Event seeker page: Site visitor can search for available venue by zip code. 
       Venue owner can also view the information they submitted here.
 
4. PROJECT OUTLINE
    - The intended use for this website is to connect venue owners with underutilized space to groups/companies in need of that space. 
    - APIs Used: Leaflet
    - AJAX: Used to obtain Lat/Long for venue location entered by venue owner
    - New Technology/Library Used: Firebase Cloud Storage for image storage and retrieval.
    - Modal(s): Used on venue owner input page.
    - Repeating Element: Table used on displayed venue list.
    - CSS Framework: UIkit
    - User Input Validation: Used on venue owner input page.
    - URL: https://zednon.github.io/Project1/
    
