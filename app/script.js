// Components
const LogoIcon = (className = '') => {
  return `
    <div class="${className}">
      <svg xmlns="http://www.w3.org/2000/svg" width="85%" height="24.42" baseProfile="tiny" viewBox="0 0 285 24.42">
        <path fill="#82B541" d="M16.52 2.46c-.65-.36-2.51-.14-4.74.55-3.9 2.67-7.2 6.61-7.43 12.93-.04.15-.43-.02-.5-.07-1.06-2.02-1.47-4.15-.59-7.22.17-.28-.37-.61-.47-.51-.19.19-1 1.05-1.53 1.98-2.65 4.6-.92 10.5 3.73 13.09 4.64 2.59 10.51.92 13.09-3.73 2.98-5.37.2-16.04-1.56-17.02z"/>
        <path fill="#FFF" d="M33.15 5.03c-5.51 0-9.5 4.09-9.5 9.73 0 5.68 3.99 9.65 9.69 9.65 2.88 0 5.17-.9 6.98-2.76.54-.59.6-1.15.6-1.36 0-.92-.68-1.59-1.63-1.59-.47 0-.87.18-1.33.6-1.03.96-2.38 1.94-4.63 1.94-3.12 0-5.66-2.35-5.82-5.36h12.43c1.35 0 2.01-.63 2.01-1.93 0-.38 0-.66-.08-1.2-.66-4.83-3.93-7.72-8.72-7.72zm0 3.02c2.98 0 4.9 1.9 5.02 4.97H27.52c.28-2.84 2.68-4.97 5.63-4.97zm20.68-3.02c-2.5 0-4.98 1.44-5.94 3.44V7.24c0-1.91-1.48-2.01-1.78-2.01-.88 0-1.82.53-1.82 2.01v14.9c0 1.99 1.58 2.09 1.89 2.09.32 0 1.89-.1 1.89-2.08v-7.99c0-3.48 1.97-5.91 4.79-5.91 2.73 0 4.06 1.79 4.06 5.48v8.41c0 1.99 1.58 2.09 1.9 2.09s1.89-.1 1.89-2.08v-9.6c0-3.64-1.8-7.52-6.88-7.52zm24.02.19c-.87 0-1.51.51-1.89 1.52l-5.18 13.03-5.14-13.03c-.4-1.02-1.03-1.51-1.93-1.51-1.04 0-1.89.82-1.89 1.82 0 .25.03.57.24 1.07l5.96 14.06c.71 1.7 1.88 2.05 2.73 2.05.85 0 2.02-.35 2.73-2.05l6-14.14c.21-.5.24-.86.24-1.03-.01-1.02-.81-1.79-1.87-1.79zm11.02-.19c-2.42 0-4.68.68-6.35 1.9-.57.39-.84.88-.84 1.5 0 .84.65 1.51 1.47 1.51.36 0 .76-.14 1.12-.4 1.44-.96 2.79-1.41 4.25-1.41 2.8 0 4.41 1.43 4.41 3.91v.41c-6.29.01-12.68.77-12.68 6.23 0 3.94 3.36 5.7 6.7 5.7 2.66 0 4.78-1.05 6.14-3.04v.96c0 1.43.96 1.93 1.78 1.93.17 0 1.7-.05 1.7-1.93V12.27c-.01-4.53-2.89-7.24-7.7-7.24zm3.26 10.21h.8v.87c0 3.19-2.03 5.25-5.18 5.25-.85 0-3.64-.2-3.64-2.76 0-3.01 4.58-3.36 8.02-3.36zm14.29-6.57c1.66 0 1.74-1.29 1.74-1.55 0-.77-.46-1.59-1.74-1.59h-3.41V2.09c0-1.54-1-2.08-1.85-2.08-.32 0-1.89.1-1.89 2.09v16.37c0 3.78 1.86 5.77 5.39 5.77.91 0 1.8-.16 2.38-.43.67-.33 1.05-.88 1.05-1.5 0-.87-.63-1.51-1.51-1.51-.17 0-.41.04-.67.12-.32.08-.54.11-.78.11-1.43 0-2.1-.94-2.1-2.95V8.67h3.39zm12.53-3.64c-5.73 0-9.89 4.06-9.89 9.65 0 2.72 1.01 5.21 2.84 6.99 1.81 1.77 4.32 2.75 7.05 2.75 5.66 0 9.92-4.18 9.92-9.73 0-5.6-4.17-9.66-9.92-9.66zm0 16.18c-3.93 0-5.98-3.28-5.98-6.52 0-4.45 3.1-6.48 5.98-6.48 2.88 0 5.98 2.03 5.98 6.48 0 4.48-3.1 6.52-5.98 6.52z"/>
        <path fill="#82B541" d="M147.18 11.24l-.04-.01-4.06 10.07h-1.13l-4.06-10.06-.04.01.17 5.08v3.64l1.41.24v1.09h-4.51v-1.09l1.41-.24v-9.89l-1.4-.24v-1.1h3.58l4 10.2h.05l3.99-10.2h3.59v1.1l-1.41.24v9.89l1.41.24v1.09h-4.51v-1.09l1.41-.24v-3.64l.14-5.09zm4.73 8.97l.93-.13 4.39-11.34h1.46L163 20.08l.92.13v1.09h-3.6v-1.09l.95-.16-.83-2.31h-5.03l-.85 2.31.95.16v1.09h-3.6v-1.09zm4.03-3.9h3.99l-1.95-5.39h-.05l-1.99 5.39zm15.26-7.56c1.37 0 2.42.3 3.15.91.73.61 1.1 1.47 1.1 2.58 0 .61-.17 1.15-.51 1.62-.34.47-.82.84-1.46 1.11.68.23 1.18.59 1.48 1.1.3.51.45 1.13.45 1.87v1.01c0 .39.05.67.15.85.1.18.26.29.48.33l.41.05v1.11h-.91c-.66 0-1.13-.23-1.41-.69-.28-.46-.42-1.02-.42-1.67v-.97c0-.68-.2-1.23-.6-1.65-.4-.41-.93-.62-1.6-.62h-2.73v4.28l1.41.24v1.09h-4.51v-1.09l1.41-.24v-9.89l-1.4-.24V8.75h5.51zm-2.4 5.6h2.23c.95 0 1.64-.18 2.07-.54.43-.36.65-.89.65-1.59 0-.66-.21-1.18-.62-1.57-.41-.39-1.05-.58-1.92-.58h-2.41v4.28zm9.55 5.86l1.41-.24v-9.89l-1.4-.24v-1.1h4.51v1.1l-1.4.24v4.22h1.3l3.51-4.34-.94-.12v-1.1h3.99v1.1l-1.18.22-3.84 4.76L188.5 20l1.18.22v1.09h-4.12v-1.09l.96-.12-3.58-4.46h-1.47v4.34l1.41.24v1.09h-4.51c-.02-.01-.02-1.1-.02-1.1zm13.24 1.09v-1.09l1.41-.24v-9.89l-1.4-.24v-1.1h9.64v3.02h-1.46l-.14-1.68h-4.94v4.06h4.8v1.34h-4.8v4.49h5.05l.14-1.68h1.45v3.01h-9.75zm22.28-12.56v2.78h-1.45l-.13-1.44h-2.79v9.89l1.41.24v1.09h-4.51v-1.09l1.41-.24v-9.89h-2.79l-.12 1.44h-1.46V8.74h10.43zm7.41 0c1.34 0 2.38.35 3.13 1.03.75.69 1.12 1.6 1.12 2.73 0 1.14-.37 2.05-1.12 2.74-.74.68-1.79 1.03-3.13 1.03h-2.66v3.71l1.41.24v1.09h-4.51v-1.09l1.41-.24v-9.89l-1.4-.24V8.74h5.75zm-2.66 6.19h2.67c.85 0 1.49-.23 1.91-.69s.63-1.03.63-1.73-.21-1.28-.63-1.74c-.42-.47-1.06-.7-1.91-.7h-2.66c-.01 0-.01 4.86-.01 4.86zm8.82 6.37v-1.09l1.41-.24v-9.89l-1.4-.24v-1.1h4.51v1.1l-1.4.24v9.89h4.36l.13-1.44h1.45v2.77h-9.05zm11.08-1.09l.93-.13 4.39-11.34h1.46l4.31 11.34.92.13v1.09h-3.6v-1.09l.95-.16-.83-2.31h-5.03l-.85 2.31.95.16v1.09h-3.6v-1.09zm4.02-3.9h3.99l-1.95-5.39h-.05l-1.99 5.39zm18.81-3.72h-1.2l-.32-1.78c-.28-.27-.61-.49-1.02-.66-.4-.17-.88-.26-1.44-.26-1.3 0-2.31.47-3.01 1.42-.7.95-1.05 2.15-1.05 3.6v.2c0 1.45.34 2.66 1.03 3.61.69.95 1.64 1.43 2.86 1.43.57 0 1.09-.09 1.55-.27s.83-.4 1.08-.66l.32-1.78h1.2v2.23c-.36.47-.91.88-1.63 1.25s-1.56.55-2.52.55c-1.63 0-2.97-.6-4.02-1.81-1.05-1.21-1.57-2.73-1.57-4.55v-.18c0-1.84.51-3.36 1.54-4.57 1.03-1.2 2.38-1.81 4.05-1.81.96 0 1.79.19 2.52.56.73.37 1.27.79 1.63 1.25v2.23c-.01 0 0 0 0 0zm2.36 8.71v-1.09l1.41-.24v-9.89l-1.4-.24v-1.1h9.64v3.02h-1.46l-.14-1.68h-4.94v4.06h4.8v1.34h-4.8v4.49h5.05l.14-1.68h1.45v3.01h-9.75zm21.06-8.85h-1.29l-.32-1.79c-.26-.22-.6-.4-1.03-.54s-.93-.22-1.5-.22c-.9 0-1.6.19-2.08.57-.48.38-.72.88-.72 1.5 0 .55.25 1 .74 1.37s1.29.69 2.39.96c1.32.33 2.33.81 3.02 1.45.69.64 1.03 1.43 1.03 2.37 0 1.01-.41 1.83-1.24 2.44-.82.62-1.9.92-3.24.92-.97 0-1.82-.16-2.57-.47-.75-.32-1.36-.73-1.83-1.24v-2.34h1.28l.33 1.8c.33.27.72.49 1.17.66.45.17 1 .26 1.63.26.86 0 1.53-.18 2.03-.54.5-.36.75-.85.75-1.47 0-.57-.22-1.06-.65-1.45-.43-.39-1.19-.71-2.29-.98-1.33-.32-2.37-.78-3.11-1.4s-1.12-1.39-1.12-2.32c0-.98.42-1.8 1.25-2.45.83-.65 1.92-.98 3.25-.98.88 0 1.68.15 2.4.45.72.3 1.3.67 1.74 1.1v2.34z"/>
      </svg>
    </div>
  `
}

const Heading = ({
  className = '', 
  content = '', 
  number = 1} = props = {}
) => {
  if (number > 6) return ''
  if (number < 0) return ''
  return `
    <h${number} class="h${number} ${className}">
      ${content}
    </h${number}>
  `
}

const Paragraph = ({
  className = '', 
  content = ''} = props = {}
) => {
  return `
    <p class="p ${className}">
      ${content}
    </p>
  `
}

const Hyperlink = ({
  className = '', 
  href= '',
  content = ''} = props = {}
) => {
  return `
    <a href="${href}" class="a ${className}" target="_blank" rel="noopener">
      ${content}
    </a>
  `
}

const Image = ({
  src= '',
  className = '', 
} = props = {}) => {
  return `
    <img className="img ${className}" src="${src}" />
  `
}

// Containers
const Header = () => {
  return `
    <header class="flex width100 backgroundColorBlack flexJustifyCenter">
      <div class="flex flexGrow1 flexAlignItemCenter flexJustifySpaceBetween containerDesktop paddingLeftSmall paddingRightSmall paddingTopSmall paddingBottomSmall">
        <div>
          ${LogoIcon()}
        </div>
        <div>
          ${Heading({
            className:'colorWhite',
            content:'Welcome back, Ehsan!',
            number: 3
          })}
        </div>
      </div>
    </header>
  `
}
const SubHeader = () => {
  return `
    <div class="flex width100 backgroundColorGreen flexJustifyCenter borderBottomGrey">
      <div class="flex flexGrow1 containerDesktop flexAlignItemCenter paddingLeftSmall paddingRightSmall paddingTopBig paddingBottomBig">
        ${Heading({
          className:'colorGreen',
          content:'Popular Items',
          number: 1
        })}
      </div>
    </div>
  `
}

// Pages
const App = () => {
  const resultHTML = `
    <div>
      ${Header()}
      ${SubHeader()}
      <div class="flex flexJustifyCenter">
        <div class="flex flexGrow1 flexJustifyCenter containerTablet flexAlignItemCenter paddingTopBig paddingBottomBig paddingLeftBig paddingRightBig">
          ${Paragraph({
            className:'colorBlack textAlignCenter h3',
            content:`
              Here are this week's most popular themes & templates from 
              ${Hyperlink({
                className: 'colorBlue',
                content: 'ThemeForest',
                href: 'https://themeforest.net/'
              })}!
              Grab 'em while they're hot!
            `
          })}
        </div>        
      </div>
    </div>
  `
  return resultHTML
}

// Utils
_replaceDOM = (id, html = '') => {
  if(id && id != '') {
    const foundDOM = document.getElementById(id)
    if (foundDOM){
      foundDOM.outerHTML = html
    }
  }
}

_fetchAPI = async ({method='GET', endPoint = ''}) => {
  const token = "Bearer HzC4A4bKKMyvVBydyHnSBv1hg8S5y4VW"
  try {
    const response = await fetch(endPoint, {
      method: method,
      headers: {
        Authorization: token
      }
    })
    const res = await response.json()
    return {
      status: 'ok',
      res
    }
  } catch(error) {
    return {
      status: 'error',
      error: error
    }
  }
}

// Services
const fetchMarketPlaceAPI = () => {
  const endPoint  = 'https://api.envato.com/v1/market/popular:themeforest.json'
  return _fetchAPI({
    endPoint: endPoint
  })
}



_replaceDOM('App',App());

