// Components
const LogoIcon = (className = '') => {
  return `
    <div class="${className}">
      <svg height="32" class="octicon octicon-mark-github" viewBox="0 0 16 16" version="1.1" width="32" aria-hidden="true"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path></svg>
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

const Button = ({
  refNumber = Math.random(),
  className = '', 
  content = '',
  onClick = () => {}
} = props = {}) => {
  if(!this.ButtonOnClick) this.ButtonOnClick = {}  
  this.ButtonOnClick[refNumber] = onClick
  return `
  <button 
    class="Button ${className}" 
    onclick="ButtonOnClick[${refNumber}]()">
    ${content}
  </button>
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
          className:'colorGreen strong',
          content:'Popular Items',
          number: 1
        })}
      </div>
    </div>
  `
}

const CardHorizontal = ({
  src='',
  title='',
  href='',
  rating=1, 
  onClick= () => {}
} = props = {}) => {
  return `
    <div data-test="CardHorizontal" class="flex height100 ${Number(rating) === 5?'backgroundColorYellow':'backgroundColorGrey'} width100 borderRadiusSmall paddingLeftSmall paddingRightSmall paddingTopSmall paddingBottomSmall">      
      <div class="flex flexAlignItemCenter">
        ${Image({
          src: src,
        })}
      </div>
      <div class="paddingLeftSmall lineHeight1">
        ${Hyperlink({
          className: 'colorBlue h3 strong',
          content: title,
          href: href
        })}
        ${Heading({
          className:'colorGrey',
          content:`Rating ${rating}`,
          number: 4
        })}
        ${Button({
          onClick: onClick,
          className: 'colorRed strong',
          content: 'Remove' 
        })}
      </div>
    </div>
  `
}

const MarketPlaceList = (response = null) => {
  if (!response){
    setTimeout(async ()=>{
      const response = await fetchMarketPlaceAPI()
      _replaceDOM('MarketPlaceList',MarketPlaceList(response));
    },10)  
    return `
      <div id="MarketPlaceList">
        <div class="flex flexJustifyCenter flexAlignItemCenter h2">
          Loading ...
        </div>
      </div>
    `
  }else if (
    response.status === 'ok' 
    && response.res
    && response.res.popular
    && response.res.popular.items_last_week
    && response.res.popular.items_last_week.length
    && response.res.popular.items_last_week.length > 0
  ){
    if (!response.removedItems) response.removedItems = []
    const filteredResponse = response.res.popular.items_last_week.filter(item => !response.removedItems.includes(item.id))
    const sortedResponse = filteredResponse.sort((itemA, itemB) => {
      return (Number(itemB.rating_decimal) - Number(itemA.rating_decimal))
    })
    return `
      <div class="flex flexJustifyCenter">
        <div class="flex width100 flexJustifyCenter containerDesktop paddingLeftSmall paddingRightSmall flexWrap">
          ${sortedResponse.map((item)=>{
            return `
              <div class="width50 width100Tablet flexNoShrink paddingLeftSmall paddingRightBig paddingTopSmall paddingBottomSmall">
                ${CardHorizontal({
                  src:item.thumbnail,
                  title:item.item,
                  href:item.url,
                  rating:item.rating, 
                  onClick: () => {                    
                    response.removedItems.push(item.id)
                    _replaceDOM('MarketPlaceList',MarketPlaceList(response));
                  }
                })}
              </div>`
          }).join('')}
        </div>
      </div>
    `
  }
  return `
    <div id="MarketPlaceList">
      <div class="flex flexDirectionColumn flexJustifyCenter flexAlignItemCenter h2">
        Something went wrong, 
        <br />
        <br />
        ${Button({
          onClick: MarketPlaceList,
          className: 'colorBlue strong',
          content: 'Please Try Again' 
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
      ${MarketPlaceList()}
    </div>
  `
  return resultHTML
}

// Utils
_replaceDOM = (id, html = '') => {
  if(id && id != '') {
    const foundDOM = document.getElementById(id)
    if (foundDOM){
      foundDOM.innerHTML = html
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
  const endPoint  = 'https://api.Github.com/v1/market/popular:themeforest.json'
  return _fetchAPI({
    endPoint: endPoint
  })
}



_replaceDOM('App',App());

