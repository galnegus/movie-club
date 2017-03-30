import React, {Component} from 'react';
import ReactDOM from 'react-dom';

export class AddMovie extends Component{
  constructor() {
    super();
    this.state = {
      searchResults: {},
    };
    this.handleSearch=this.handleSearch.bind(this);
  }

  handleSearch(results){
    this.setState({searchResults: results});
  }

  render(){
  	return(
  	  <div>
    		<Search handleSearch={this.handleSearch} />
    		<MovieTable movies={this.state.searchResults.results} />
  	  </div>
  	);
  }
}




class Search extends Component{
  constructor() {
    super();
    this.state = {
       searchResults: {},
    };
    this.onSubmit=this.onSubmit.bind(this);
  }


  onSubmit(e) {
      e.preventDefault();
      // make the api get call and get the results and put it in the state
      // console.log("e value = ", e.target.value);
      const results = {
            "page": 1,
            "results": [
              {
                "poster_path": "/tvSlBzAdRE29bZe5yYWrJ2ds137.jpg",
                "adult": false,
                "overview": "Princess Leia is captured and held hostage by the evil Imperial forces in their effort to take over the galactic Empire. Venturesome Luke Skywalker and dashing captain Han Solo team together with the loveable robot duo R2-D2 and C-3PO to rescue the beautiful princess and restore peace and justice in the Empire.",
                "release_date": "1977-05-25",
                "genre_ids": [
                  12,
                  28,
                  878
                ],
                "id": 11,
                "original_title": "Star Wars",
                "original_language": "en",
                "title": "Star Wars",
                "backdrop_path": "/4iJfYYoQzZcONB9hNzg0J0wWyPH.jpg",
                "popularity": 12.915101,
                "vote_count": 5195,
                "video": false,
                "vote_average": 8
              },
              {
                "poster_path": "/qjiskwlV1qQzRCjpV0cL9pEMF9a.jpg",
                "adult": false,
                "overview": "A rogue band of resistance fighters unite for a mission to steal the Death Star plans and bring a new hope to the galaxy.",
                "release_date": "2016-12-14",
                "genre_ids": [
                  28,
                  18,
                  878,
                  10752
                ],
                "id": 330459,
                "original_title": "Rogue One: A Star Wars Story",
                "original_language": "en",
                "title": "Rogue One: A Star Wars Story",
                "backdrop_path": "/tZjVVIYXACV4IIIhXeIM59ytqwS.jpg",
                "popularity": 34.896452,
                "vote_count": 2804,
                "video": false,
                "vote_average": 7.3
              },
              {
                "poster_path": "/weUSwMdQIa3NaXVzwUoIIcAi85d.jpg",
                "adult": false,
                "overview": "Thirty years after defeating the Galactic Empire, Han Solo and his allies face a new threat from the evil Kylo Ren and his army of Stormtroopers.",
                "release_date": "2015-12-15",
                "genre_ids": [
                  28,
                  12,
                  878,
                  14
                ],
                "id": 140607,
                "original_title": "Star Wars: The Force Awakens",
                "original_language": "en",
                "title": "Star Wars: The Force Awakens",
                "backdrop_path": "/njv65RTipNSTozFLuF85jL0bcQe.jpg",
                "popularity": 13.459847,
                "vote_count": 6153,
                "video": false,
                "vote_average": 7.5
              },
              {
                "poster_path": "/fntcKx0aAvgfUs2dbVzQD7VEZ09.jpg",
                "adult": false,
                "overview": "Having taken her first steps into a larger world in Star Wars: The Force Awakens (2015), Rey continues her epic journey with Finn, Poe and Luke Skywalker in the next chapter of the saga.",
                "release_date": "2017-12-13",
                "genre_ids": [
                  28,
                  12,
                  14,
                  878
                ],
                "id": 181808,
                "original_title": "Star Wars: The Last Jedi",
                "original_language": "en",
                "title": "Star Wars: The Last Jedi",
                "backdrop_path": "/m5YrALhx4I8c0Lnu2Gq9W8aeC4.jpg",
                "popularity": 5.008318,
                "vote_count": 62,
                "video": false,
                "vote_average": 0
              },
              {
                "poster_path": "/xd6yhmtS6mEURZLwUDT5raEMbf.jpg",
                "adult": false,
                "overview": "Set between Episode II and III the Clone Wars is the first computer animated Star Wars film. Anakin and Obi Wan must find out who kidnapped Jabba the Hutts son and return him safely. The Seperatists will try anything to stop them and ruin any chance of a diplomatic agreement between the Hutt's and the Republic.",
                "release_date": "2008-08-05",
                "genre_ids": [
                  53,
                  16,
                  28,
                  878,
                  12,
                  14
                ],
                "id": 12180,
                "original_title": "Star Wars: The Clone Wars",
                "original_language": "en",
                "title": "Star Wars: The Clone Wars",
                "backdrop_path": "/gmLMaDXi4lFWG8WitaCYOJS5GtL.jpg",
                "popularity": 2.329595,
                "vote_count": 334,
                "video": false,
                "vote_average": 5.9
              },
              {
                "poster_path": "/n8V09dDc02KsSN6Q4hC2BX6hN8X.jpg",
                "adult": false,
                "overview": "Anakin Skywalker, a young slave strong with the Force, is discovered on Tatooine. Meanwhile, the evil Sith have returned, enacting their plot for revenge against the Jedi.",
                "release_date": "1999-05-19",
                "genre_ids": [
                  12,
                  28,
                  878
                ],
                "id": 1893,
                "original_title": "Star Wars: Episode I - The Phantom Menace",
                "original_language": "en",
                "title": "Star Wars: Episode I - The Phantom Menace",
                "backdrop_path": "/wdp4unWJWY9hGKN1tM56HeSt6PZ.jpg",
                "popularity": 5.717797,
                "vote_count": 3376,
                "video": false,
                "vote_average": 6.3
              },
              {
                "poster_path": "/2vcNFtrZXNwIcBgH5e2xXCmVR8t.jpg",
                "adult": false,
                "overview": "Ten years after the invasion of Naboo, the galaxy is on the brink of civil war. Under the leadership of a renegade Jedi named Count Dooku, thousands of solar systems threaten to break away from the Galactic Republic. When an assassination attempt is made on Senator Padmé Amidala, the former Queen of Naboo, twenty-year-old Jedi apprentice Anakin Skywalker is assigned to protect her. In the course of his mission, Anakin discovers his love for Padmé as well as his own darker side. Soon, Anakin, Padmé, and Obi-Wan Kenobi are drawn into the heart of the Separatist movement and the beginning of the Clone Wars.",
                "release_date": "2002-05-15",
                "genre_ids": [
                  12,
                  28,
                  878
                ],
                "id": 1894,
                "original_title": "Star Wars: Episode II - Attack of the Clones",
                "original_language": "en",
                "title": "Star Wars: Episode II - Attack of the Clones",
                "backdrop_path": "/560F7BPaxRy8BsOfVU6cW4ivM46.jpg",
                "popularity": 4.232434,
                "vote_count": 3053,
                "video": false,
                "vote_average": 6.4
              },
              {
                "poster_path": "/tgr5Pdy7ehZYBqBkN2K7Q02xgOb.jpg",
                "adult": false,
                "overview": "Years after the onset of the Clone Wars, the noble Jedi Knights lead a massive clone army into a galaxy-wide battle against the Separatists. When the sinister Sith unveil a thousand-year-old plot to rule the galaxy, the Republic crumbles and from its ashes rises the evil Galactic Empire. Jedi hero Anakin Skywalker is seduced by the dark side of the Force to become the Emperor's new apprentice – Darth Vader. The Jedi are decimated, as Obi-Wan Kenobi and Jedi Master Yoda are forced into hiding. The only hope for the galaxy are Anakin's own offspring – the twin children born in secrecy who will grow up to become heroes.",
                "release_date": "2005-05-17",
                "genre_ids": [
                  878,
                  12,
                  28
                ],
                "id": 1895,
                "original_title": "Star Wars: Episode III - Revenge of the Sith",
                "original_language": "en",
                "title": "Star Wars: Episode III - Revenge of the Sith",
                "backdrop_path": "/wUYTfFbfPiZC6Lcyt1nonr69ZmK.jpg",
                "popularity": 4.204161,
                "vote_count": 3143,
                "video": false,
                "vote_average": 7
              },
              {
                "poster_path": "/sNxgvnswaahOA3mdkjcuYYpLi7i.jpg",
                "adult": false,
                "overview": "Luke Skywalker and Han Solo battle evil Imperial forces to help Chewbacca reach his imperiled family on the Wookiee planet - in time for Life Day, their most important day of the year!",
                "release_date": "1978-12-01",
                "genre_ids": [
                  12,
                  35,
                  10751,
                  878,
                  10770
                ],
                "id": 74849,
                "original_title": "The Star Wars Holiday Special",
                "original_language": "en",
                "title": "The Star Wars Holiday Special",
                "backdrop_path": "/ie6u0zegHcVJEtHSpYn0KgEogrD.jpg",
                "popularity": 2.388769,
                "vote_count": 64,
                "video": false,
                "vote_average": 3.1
              },
              {
                "poster_path": "/yVYTFvIiKyr6vsrPw3o5C6t2eoL.jpg",
                "adult": false,
                "overview": "No plot has been confirmed yet",
                "release_date": "2019-05-23",
                "genre_ids": [
                  878,
                  28,
                  12,
                  10751
                ],
                "id": 181812,
                "original_title": "Star Wars: Episode IX",
                "original_language": "en",
                "title": "Star Wars: Episode IX",
                "backdrop_path": "/i0NGCiMxL4NIVk2hhjtVgnNYZ3a.jpg",
                "popularity": 1.741022,
                "vote_count": 26,
                "video": false,
                "vote_average": 0
              },
              {
                "poster_path": "/eXTHMd5sm5BnMmZsBI9YF1SaIpG.jpg",
                "adult": false,
                "overview": "Star Wars: Clone Wars is an Emmy Award- and Annie Award-winning American animated microseries set in the Star Wars universe.  Chronologically, the series takes place during the three-year time period between the prequel films Attack of the Clones and Revenge of the Sith. The show depicted the actions of various characters in the Star Wars prequel trilogy, including Anakin Skywalker, Obi-Wan Kenobi, Mace Windu, and other Knights of the Jedi Order during the conflict, leading the clone trooper forces of the Galactic Republic against the battle droid armies of the Confederacy of Independent Systems and the Sith.",
                "release_date": "2003-11-07",
                "genre_ids": [
                  14,
                  28,
                  12,
                  16,
                  878
                ],
                "id": 420803,
                "original_title": "Star Wars: Clone Wars",
                "original_language": "en",
                "title": "Star Wars: Clone Wars",
                "backdrop_path": null,
                "popularity": 1.193373,
                "vote_count": 36,
                "video": false,
                "vote_average": 7.3
              },
              {
                "poster_path": "/kWKspQ7YiQ82xXM1jVbIbqh5OyV.jpg",
                "adult": false,
                "overview": "Fans of Adult Swim's \"Robot Chicken\" and the Star Wars movie franchise won't want to miss this collection of 30 sketches. This hilarious compilation features an array of skits -- such as \"Darth Vader's Collect Call\" and \"Inside the AT-AT\" -- as well as the incredible voice talents of Hulk Hogan, Malcolm McDowell, Conan O'Brien and even the original Luke Skywalker himself, Mark Hamill.",
                "release_date": "2007-07-17",
                "genre_ids": [
                  16,
                  35,
                  878
                ],
                "id": 42979,
                "original_title": "Robot Chicken: Star Wars",
                "original_language": "en",
                "title": "Robot Chicken: Star Wars",
                "backdrop_path": "/gZxY7VDOI48gjhnDJK1E6n9uHWk.jpg",
                "popularity": 1.602603,
                "vote_count": 47,
                "video": true,
                "vote_average": 6.9
              },
              {
                "poster_path": "/nvxKvVQortycuwmfMdUIfDtYdL1.jpg",
                "adult": false,
                "overview": "The Emmy Award-winning animated series continues with \"Star Wars: Clone Wars\" Volume Two. Directed by Genndy Tartakovsky, this series captures George Lucas' vision in a dynamic animated style that is a visual delight for all ages. As seen on Cartoon Network, \"Star Wars: Clone Wars\" Volume Two concludes the epic adventures that bridge the story between \"Star Wars: Episode II: Attack of the Clones\" and \"Star Wars: Episode III: Revenge of the Sith.\" Witness firsthand the trials of Anakin Skywalker and the secret ceremony in which he becomes a Jedi Knight. Then, follow the Jedi was they attempt to repel a surprise attack by General Grevious on the galactic capital, Coruscant. \"Clone Wars\" Volume Two is filled with exciting galactic battles that lead directly to the beginning of \"Revenge of the Sith.\"",
                "release_date": "2005-11-30",
                "genre_ids": [
                  14,
                  16,
                  28,
                  12,
                  878
                ],
                "id": 333365,
                "original_title": "Star Wars: Clone Wars: Volume Two",
                "original_language": "en",
                "title": "Star Wars: Clone Wars: Volume 2",
                "backdrop_path": "/wLu8dXrEmCb0g6Ks83sk7x9cao9.jpg",
                "popularity": 1.534785,
                "vote_count": 9,
                "video": true,
                "vote_average": 8.1
              },
              {
                "poster_path": "/6u1fYtxG5eqjhtCPDx04pJphQRW.jpg",
                "adult": false,
                "overview": "The epic saga continues as Luke Skywalker, in hopes of defeating the evil Galactic Empire, learns the ways of the Jedi from aging master Yoda. But Darth Vader is more determined than ever to capture Luke. Meanwhile, rebel leader Princess Leia, cocky Han Solo, Chewbacca, and droids C-3PO and R2-D2 are thrown into various stages of capture, betrayal and despair.",
                "release_date": "1980-05-17",
                "genre_ids": [
                  12,
                  28,
                  878
                ],
                "id": 1891,
                "original_title": "The Empire Strikes Back",
                "original_language": "en",
                "title": "The Empire Strikes Back",
                "backdrop_path": "/amYkOxCwHiVTFKendcIW0rSrRlU.jpg",
                "popularity": 6.259359,
                "vote_count": 4660,
                "video": false,
                "vote_average": 8.1
              },
              {
                "poster_path": "/2Bc0Ust8YlcJy6tSwiXTLu66xRa.jpg",
                "adult": false,
                "overview": "The Saga continues with the Emmy-winning \"Star Wars: Clone Wars.\" This animated micro-series, directed by Genndy Tartakovsky, captures George Lucas' vision in a dynamic animated style that is a visual delight for all ages.  \"Star Wars: Clone Wars\" Volume 1 reveals the epic adventures that bridge the story arc between \"Star Wars: Episode II: Attack of the Clones\" and \"Star Wars: Episode III: Revenge of the Sith.\" Follow the valiant Jedi Knights and the Brave soldiers of the Republic's clone army as they battle against the droid forces of the Separatists, led by the evil Sith Lord, Count Dooku. Witness the battles that made galactic heroes out of Anakin Skywalker and Obi-Wan Kenobi, and along the way get a first look at the new menace from Episode III, General Grevious.  This is a must-have for any \"Star Wars\" collection.",
                "release_date": "2005-03-21",
                "genre_ids": [
                  28,
                  12,
                  16,
                  14,
                  878
                ],
                "id": 333355,
                "original_title": "Star Wars: Clone Wars: Volume 1",
                "original_language": "en",
                "title": "Star Wars: Clone Wars: Volume 1",
                "backdrop_path": "/jwAVVivirH1vCceiTakFdLqiL9o.jpg",
                "popularity": 1.379308,
                "vote_count": 9,
                "video": true,
                "vote_average": 7.8
              },
              {
                "poster_path": "/4UrrUoVQ1Ft6g6uI4FQN6JrJwSQ.jpg",
                "adult": false,
                "overview": "The Skywalker family is at the heart of the Star Wars saga. Now hear the inside story of Luke and Anakin Skywalker from the characters who witnessed it all: the famous droid duo C-3PO and R2-D2. Episodes IV,V and VI are explored in \"The Story of Luke Skywalker,\" which follows the young man escaping from his daily chores on Tatooine to his becoming a hero in the Rebal Alliance. In \"The Story of Anakin Skywalker,\" you'll go behind the mask of the greatest Star Wars villain and discover how Darth Vader started life as a young Podracing Champ on Tatooine and later became a headstrong young Jedi seduced by the Dark Side of the Force. With clips from the Star Wars films, C-3PO and R2-D2 take you on an hour-long journey through the saga and prepare you for the explosive final chapter: Star Wars: Episode III Revenge of the Sith.",
                "release_date": "2005-08-18",
                "genre_ids": [
                  99
                ],
                "id": 435365,
                "original_title": "The Story of Star Wars",
                "original_language": "en",
                "title": "The Story of Star Wars",
                "backdrop_path": null,
                "popularity": 1.127252,
                "vote_count": 0,
                "video": false,
                "vote_average": 0
              },
              {
                "poster_path": "/65jlytLScOl2pEzm1ky6aagVreR.jpg",
                "adult": false,
                "overview": "Alex Zane counts down the top 20 Star Wars moments as voted by the public. Includes contributions from famous fans as well as the stars and crew of the intergalactic saga.",
                "release_date": "2015-12-26",
                "genre_ids": [
                  99
                ],
                "id": 378386,
                "original_title": "Star Wars: Greatest Moments",
                "original_language": "en",
                "title": "Star Wars: Greatest Moments",
                "backdrop_path": null,
                "popularity": 1.154876,
                "vote_count": 6,
                "video": false,
                "vote_average": 6.4
              },
              {
                "poster_path": "/ddgxgzWsRKz6PrLRFcf4Xlcb4C4.jpg",
                "adult": false,
                "overview": "Upcoming Star Wars Spin-off directed by Phil Lord and Christopher Miller. The story is centered on a young Han Solo, the rogueish smuggler who later meets Obi-Wan Kenobi and Luke Skywalker in the Mos Eisley Cantina in Star Wars (1977).",
                "release_date": "2018-05-24",
                "genre_ids": [
                  10751,
                  28,
                  12,
                  878
                ],
                "id": 348350,
                "original_title": "Han Solo: A Star Wars Story",
                "original_language": "en",
                "title": "Han Solo: A Star Wars Story",
                "backdrop_path": "/AW6R9QRrKZHQYcA7E5y3Q4u0z9.jpg",
                "popularity": 1.573193,
                "vote_count": 2,
                "video": false,
                "vote_average": 0
              },
              {
                "poster_path": "/5FqjtzTlEv6vqVlAMFeyEzZMRmo.jpg",
                "adult": false,
                "overview": "A look at the creation and filming of the various heroes and villains from all six Star Wars movies, leading up to the release of Star Wars: Episode III - Revenge of the Sith.",
                "release_date": "2005-05-03",
                "genre_ids": [
                  99
                ],
                "id": 432134,
                "original_title": "Star Wars: Heroes & Villains",
                "original_language": "en",
                "title": "Star Wars: Heroes & Villains",
                "backdrop_path": null,
                "popularity": 1.000288,
                "vote_count": 2,
                "video": false,
                "vote_average": 10
              },
              {
                "poster_path": "/jwUexLOEBMFMbBoKzK4AT7hQYDw.jpg",
                "adult": false,
                "overview": "Paul “OtaKing” Johnson drops a real treat in the form of this “Star Wars: TIE Fighter” animated short. Complete with appropriately radical electric guitar solos and impressive attention to detail, “TIE Fighter” casts the forces of the Galactic Empire not in the role of disposable cannon fodder seen in the Star Wars films, but as near-suicidally reckless angels of death.  Johnson animated this 7-minute short over the course of “four years’ worth of weekends,” and his love and attention-to-detail shows.",
                "release_date": "2015-03-24",
                "genre_ids": [
                  878,
                  28,
                  16
                ],
                "id": 332479,
                "original_title": "Star Wars: TIE Fighter",
                "original_language": "en",
                "title": "Star Wars: TIE Fighter",
                "backdrop_path": "/eNSyTprwxXrXs5amshnz2R2GKod.jpg",
                "popularity": 1.067262,
                "vote_count": 31,
                "video": false,
                "vote_average": 7.7
              }
            ],
            "total_results": 102,
            "total_pages": 6
          }
      // this.setState({searchResults: results})
      this.props.handleSearch(results)
  }

  render(){
  	return(
  	  <div>
        <form onSubmit={this.onSubmit}>
    		  <input type="search" placeholder="Search" />
          <button type="submit">Search</button>
        </form>
  	  </div>
  	);
  }
}


class MovieTable extends Component{
  render(){
    var rows = [];
    if(this.props.movies){
      this.props.movies.forEach( movie => {
        // console.log("movie = ", movie)
        rows.push( <MovieRow id={movie.id} 
                              key={movie.id}
                              title={movie.title}
                              overview={movie.overview}
                              poster_path={movie.poster_path}
                              release_date={movie.release_date} />)
      });      
    }

  	return(
  	  <div>
        {rows}
  	  </div>
  	);
  }
}





class MovieRow extends Component{
  render(){
  	return(
  	  <div>
        <table >
          <tr>
            <th rowSpan="2"><img src={this.props.poster_path}></img></th>
            <th >{this.props.title}</th>
            <th >{this.props.release_date}</th>
          </tr>
          <tr>
            <th colSpan="2">{this.props.overview}</th>
          </tr>
        </table>
  	  </div>
  	);
  }
}
