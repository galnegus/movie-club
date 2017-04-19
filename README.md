# movie-club

To run this project you first need to have Node installed.

1. Run the `npm install` command in the `movie-club` folder to install the necessary packages.

2. Launch the dev webserver with `npm start`.

3. To access the website, visit `http://localhost:8080/` in your favorite (modern) browser.

The websites currently does not have any system for creating user accounts, we have prepared 3 accounts for testing purposes (additional accounts can be created via the Firebase console by us):

**Admin**  
*email:* admin@admin.com  
*password:* 123456  
*role:* Admin  
  
**Wow**  
*email:* wow@wow.com  
*password:* 123456  
*role:* Member  
  
**Cool**  
*email:* cool@cool.com  
*password:* 123456  
*role:* Member  

bugs:
-------
1. There is currently a bug where the redux state is not updating when removing a movie from the schedule immediately after adding a movie (a refresh or leaving and re-entering the route is required to see the updated state). We have no idea why this occurs. We are using a library called react-redux-firebase that is supposed to manage the firebase state locally. For some reason it is not properly doing the removal after adding a movie. **We temporarily fixed this bug by redirecting twice after adding a movie (*/add-movie -> /redirect -> /schedule*), for some reason this fixes the problem**.

2. Another react-redux-firebase problem: When logging out, the firebase state stored locally would be removed for some reason (and then never update again). Again, this is a plugin problem that we have no control over. **We've made a temporary fix by just setting location.window.href = '/' after logging out. The user will still log out, it just forces a refresh now so that the data will actually load.**

mockups:
---------
https://www.dropbox.com/s/yw1llolx12rfll6/mockups.pdf?dl=0
