# Use
`onScrollDepth` takes a callback that passes the page scroll `depth` target.

Default targets:

 * 25
 * 50
 * 75
 * 100
 
To update targets, edit the `validScrollDepths` array.

## Note

The script will only track the scroll depth once for every page load.

### Single Page App?

Applies if using [`react-router`](/packages/react-router) or [`Angular's route provider`](https://docs.angularjs.org/api/ngRoute)

If you want to track page scroll depth within a single page app, you will need to instantiate this code for every route change (loading a new page).

Simply apply the functions as methods to a `class` and call a `new` version for every page load/enter.
