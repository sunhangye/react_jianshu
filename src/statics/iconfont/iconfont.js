import { injectGlobal } from 'styled-components'

injectGlobal`
  @font-face {font-family: "iconfont";
    src: url('./iconfont.eot?t=1560393692293'); /* IE9 */
    src: url('./iconfont.eot?t=1560393692293#iefix') format('embedded-opentype'), /* IE6-IE8 */
    url('data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAAAPIAAsAAAAAB8wAAAN5AAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHEIGVgCDHAqDDIJwATYCJAMQCwoABCAFhG0HRBveBlGUDkaD7Edh3HCXvPr8wkeb9juLaLFg0Fy43+Phaw19f2/vsiFUQGB5fFTGhwuOhK9qx1eYVlaYGFfWbMRdrW0xKWGn45FkmrQf93svvr/YdFomJUKE0BjKywZlsgXlH6UD/CUuDlUzbYPNB4rLHOM8lAtgeGvAxlxtQQrcghTIO4xdeRH7CXSZ1JI7X+yOUJUZwwLx3LUVVFNauaYwFKEpmZvFO9RKepMugbf+78d/g6AjqSvG2Iu7uQWjX6O/Dqvitpi/i8Abzwy2iArrQCYeSq1XCmF0XUGX0rnoECiKxFgtc78O2xbx9yItplTff7xENIz8HrAPYxW/OGxuLBODagFlmjBPghciLzDnNfCRgRt3eZKlYQpdGd1M9nMnzdwX+3zP884d97t3Perum7H7GCWmyffve7FK3sBEeFLciTjSx7dZkHjP7R2yQdYB0BXELlF7DZZ4eZX4Z+p7LI6C4g9k3QGEXl5RSl4lJYRncyNwZw/3aBV3zx885x3za+eL4vLqmFhZkvBYuyv/+HtCIIoOdx3cqMcNGJhRF4pZ4ViHUuMf4t9pcvkHc/HAFCo1Uwamc1EOwlz8zabAbqTVTenzmxGM/0PN7sUaOnkg09AYw/tUvw3T0o+0t2Btopgk4xnDEEDaGeu+CfRKv+AZ/c0r8VFCEPyldCejnTp1X4hgtSNgDvzRbDzvn9cs2DzuSFnmz+PiJscWeD/YqPn2fY/N4KlysORwtADJAKA9wFvYwKf+x7sYxEuwDy74d3/j01bfiyAm/a/OC5nBN6mvP6G7LcmgnQx+AK8170/xWpZkVWDocpaFNlezZduJYRK6dOH/JBnyG0M+2jqfUIzGkHSYgEoxj8zYdah124dGcQRd1iwXdxvGCiJ3YtULQBjwhqTPI1QGfJAZ+4XamD80BgJDl8tgW7PbYsTUzZiUkIWXJ7o6joxlkHpQuCf7GihOCnzKmThzA9jf3M4mlhQRjzEhu9kDEYOG4xAX4DAKghgTjj3S0nFEkmF3667sizo6DqHuDCOKIBZ08YRcWixi3Mqinvv5PWK7CihcU1RhPiMs47aP+jp6LZBLadSq6FoeydzYBoQwkMFiIbQAZhKY0RhKynt5iCY6nB7hxFAXlTNtpZ355eETroIuxnY5UlSRo9a8IMXayZuo5g2I2lEmad+NAAAAAAA=') format('woff2'),
    url('./iconfont.woff?t=1560393692293') format('woff'),
    url('iconfont.ttf?t=1560393692293') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
    url('./iconfont.svg?t=1560393692293#iconfont') format('svg'); /* iOS 4.1- */
  }

  .iconfont {
    font-family: "iconfont" !important;
    font-size: 16px;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .iconsearch:before {
    content: "\e623";
  }

  .iconAa:before {
    content: "\e636";
  }

  .iconicon-checkin:before {
    content: "\e615";
  }


`
