## 2023-06-14

- Updated changelog
- Updated reamde
- Added tests

## 2023-01-09

- Updated readme file.
- Modified package.json file.
- Prepared for Vercel deployment.
- Added Vercel config file.

## 2022-12-15

- Made minor changes.

## 2022-12-13

- Implemented changes to cover Musixmatch copyright requirements:
  - Added tracking scripts.
  - Added copyright texts.
  - Added Musixmatch badge image.
- Linked up portfolio in navigation.
- Implemented fadeInAnimations to most elements.
- Rewrote Loading Spinner to improve appearance.
- Fixed Ellipsis mixin to receive props.

## 2022-12-12

- Optimized some code.

## 2022-12-02

- Added responsive web design (RWD) to SummaryPage.

## 2022-11-29

- Linked summary buttons.

## 2022-09-14

- Added table of contents to SummaryPage with text.
- Extracted paragraph component from AboutPage to an individual component.

## 2022-09-13

- Added dynamic summary table rendering.
- Styled the table.

## 2022-09-12

- Added basic styling for Summary Page.
- Converted and passed data to Summary Page.

## 2022-09-06

- Added handling for typing errors.
- Renamed constants to be uppercase.

## 2022-09-03

- Fixed minor visual bugs on LyricsBoard and SongTile components.
- Fixed progressBar classNames problem.
- Displayed lyrics only when there are no errors.
- Displayed songs only with lyrics.
- Displayed unauthorized lyrics error.

## 2022-09-03

- Merged branch 'dev' from https://github.com/Pawlaczenko/Tempo-react into dev.
- Fixed word wrapping on LyricsBoard.

## 2022-08-26

- Merged pull request #2 from Pawlaczenko/Refactoring.
- Refactored TestPage code.
- Started fixing word wrapping in Test.

## 2022-08-25

- Added SummaryPage template.

## 2022-08-24

- Added test finish condition.
- Extracted Lyrics placeholder to another component.
- Removed the last new line character from lyrics placeholder.

## 2022-08-22

- Added functionality to progress bar.
- Added functionality to Timer using custom hook.
- Added backspace key function.
- Added bolder variant to monospace font.
- Added Test page width LyricsBoard component.
- Added Timer and Progress Bar placeholders.
- Added global styles to React icons to display them inline-block and vertically align them to the middle.

## 2022-08-17

- Added TestPage skeleton.
- Linked up SongTile components.
- Fixed page state jumping over to the next query.
- Added "no results" error on the backend.

## 2022-08-11

- Extracted SearchPage logic into a separate custom hook called useFetch.
- Implemented missing responsive web design (RWD).

## 2022-08-11

- Handled click on TopUSButton.
- Added Error message component to display errors.
- Changed the number of songs shown from 12 to 9.
- Fixed grid layout bugs on SongsGrid component.
- Fixed unescaped characters bug on the backend.

## 2022-08-10

- Added pagination to SearchPage.
- Fixed unescaped characters error on the server-side.
- Fixed title hover on SongTile component.
- Added loading spinner.
- Fixed rerendering issues on SearchPage.

## 2022-08-09

- Added SearchPage.
- Added SongsGrid component with SongTile.
- Showed songs from the API.
- Added Default Album Image.
- Handled SearchBar onSubmit event.
- Modified Heading component.

## 2022-08-08

- Closed navigation when changing location on the burger menu.
- Added custom scrollbar.
- Fixed navigation menu z-index.
- Added About Page with responsive web design (RWD).
- Extracted GetTopSongsinUS button to a separate component.

## 2022-08-08

- Implemented responsive web design (RWD) to HomePage.
- Fixed SideMenu positioning.

## 2022-08-08

- Added grid layout to the main wrapper.
- Fixed overflow-y on the main wrapper.
- Added button component with variants.
- Added heading component.
- Added big variant to SearchBar component.
- Populated HomePage.

## 2022-08-05

- Added responsive side menu navigation toggled by Burger component.

## 2022-08-05

- Moved font import to the HTML file.
- Added basic media queries.
- Added Burger component.

## 2022-07-28

- Added searchBar component styles - small variant.
- Fixed long Logo link bug.
- Exported box-shadow mixin to CSS variable instead.

## 2022-07-27

- Added React icons.
- Imported Google Fonts.
- Changed pixel values to rem values.
- Exported CSS reset to another file.
- Exported CSS variables to another file.
- Changed color formatting to HSLA.

## 2022-07-26

- Changed ul to nav.
- Cleaned NavLink code.
- Added Header component with Logo and Navigation.
- Added favicon.
- Created context panel and styled it.
- Extracted some styles to mixins.js.
- Moved global styles and related files to the 'styles' folder.

## 2022-07-26

- Imported images to the project.
- Added global styles.

## 2022-07-26

- Configured React Router.
- Created the initial file structure.

## 2022-07-24

- Added Lyrics route.
- Added GetTopUS route.
- Refactored ugly code.
- Exported getAlbumCovers to separate request.

## 2022-07-23

- Cleaned artist name from feats.
- Added Search pagination.
- Created prepareURL method.

## 2022-07-22

- Created a request that returns track list search with album covers.

## 2022-07-22

- Cleaned up React app template.

## 2022-07-22

- Added readme.

## 2022-07-22

- Initial commit. Tested Musixmatch API with Node.js requests.
