# DevTinder

Body
    NavBar
    Route=/ => Feed
    Route=/login => Login
    Route=/connections => Connections
    Route=/profile => Profile

# For Login
    - install cors on backend
    - send the axios call with {withCredentials: true} options to set the cookies

# Redux
    - Firstly configureStore => Setup the Provider and store in it => Set up the Slice and reducer in it and export it with actions
    - useDispatch to set the data using actions into the slices