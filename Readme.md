# React Application

An application that will put a list of gitargs.
Once you click on a gitar it will open the details page of this gitar.
The application will use a client side Routing and a server Side Routing.
The client side routing will use react route to navigate between react views pages.
The server side routing will allow to create friendly urls to allow to render the pages on the server side.

# What need to build

we need the following packages.
1. React , React-Dom, and React Route.
2.  EJS , Express, and http-server (for rendering the pages from the server side)
3. Other dependecies that will allow us to build modern javascript such webkit, babel-cli, babel-core, babel-loader, babel-parset-es2015, babel-parset-react.


# how to build.

we will start on our src file.
you can see a folder called data, and public.
inside the data have our json file.
the public folder is the root of our app that have the index.html, and images with the js bundled that is compiled.(compiling ES6 to regular javascript).
We need to make sure to organize our folders to seperate our concerns in the react application.

make sure to create these folders.

src/components (that will contain our application components)
src/voews (that will have the EJS file that will be rendered from the server using the express dependecy).


# inside the componets folder
to organize our applications we need to have the following subfolders in the components folder.
src/components/pages (that will have all pages of our applications)
src/components/partials (a partial of code that can be reusable, in our case the gitar display list that is repeated)
src/compoenets/routing (that will have the application routing and the route rules)

# Files that need to create inside folders.

## pages
1. app.js (the default root component)
2. guitar.js
3. home.js
4. notfound.js


## partials
1. guitarpreview.js

## routing
1. AppRoutes.js
2. routes.js

## src/views
1. guitar-page.ejs

## src
1. client-app.js
2. server-app.js


# start to build the App
first we need to write our routing application concept, this is why we will start with the AppRoutes.js located in the src/components/routing folder.
1. import React 
2. import Router , browserHistory from react-router
3. import routes from routes that is located on the same folder
3. there is a new way you can use to create a route as example:
 1. export default class AooRoutes extends React.Component

4. render() { return ()} the following code `<Router history={browserHistory} routes={routes} />`


second we need to write the routes files that will handel the application routes.
1. import react
2. import import Router, browserHistory, Route, IndexRoute from react-router;
3. import App, Home Guitar Components
4. create a const variable named routes have the following code `Route path="/" component={App}>
        <IndexRoute component={Home} />
        <Route path="guitar/:guitarId" component={Guitar} />
    </Route>`

5. don't forget to export the default routes component
6. try to explain number 4 the route paths to your self to get the logic behind.


third in the app.js make sure to do the following
1. import React
2. render ( { return() }) the following
3. `<div className="container app-container">
                if the this props children || "This is the default content" // don't forget the {} 
            </div>`


# second attach to client-app.js
in the client-app.js located at the src. do the following.
1. import React
2. import reactDom
3. import the AppRoutes
4. create a load event listener (regular javascript code)
ex: 
window.addEventListener("load", (e) => {
    
});

5. creat the render method of react taking into consideration that the AppRoutes is responsible to render the propriate things
ex:
ReactDOM.render(<name of correct tag  />, document.getElementById("name of the rendered location id"));


# third Have our home page to lists our gitars.
in the home.js do the following.
1. import the React
2. import the GuitarPartial from the partial (a common reusable component that can get handy)
3. import the GuitarData from the json file
4. create the component Home that will render the following code.
`<div className="row">
                {GuitarData.map(g => {
                    return (
                        <div key={g.id} className="col-md-3">
                            <GuitarPreview {...g} />
                        </div>
                    );
                })}
            </div>`
5. try to explain the map method and the GuitarPreview component.

# forth Working on the guitar preview partial component.
1. import React
2. we will use the Link method from react-router
3. create the component that will return following.
4. don't forget to put {} on the props, also it is a class so you need to use this.
ex:
`<div className="guitar-preview">
                <h3>
                    <Link to={"/guitar/" + the this props id}>
                        the this props name <small>the this props manufacturer</small>
                    </Link>
                </h3>
                <img className="img-responsive" src={"img/" + the this props image } />
            </div>`


# fifth create the details page
1. import React
2. import NotFound
3. import GuitarData

4. in the render() create the following const
    1. id that is equal this.props.params.guitarId;
    2. guitar that is equal to  GuitarData.find((g) => g.id == id);

5. create a condition that if !guitar to return the NotFound component.
6. we need to render( return () ) the following.
`<div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <h1> guitar manufacturer   guitar name</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <img className="img-responsive" src={"../img/"+ guitar image } />
                    </div>
                    <div className="col-md-6">
                        <h3>Description</h3>
                        <ul>
                            <li>Year:  guitar year </li>
                            <li>Neck:  guitar neck </li>
                            <li>Fingerboard:  guitar fingerboard </li>
                            <li>Frets:  guitar frets </li>
                        </ul>
                    </div>
                </div>
            </div>`

# sixth create the generik not found component
1. we need to render the following message <h1>This guitar cannot be found.</h1>


# the imporance of the server side application.
