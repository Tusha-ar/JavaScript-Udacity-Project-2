//Making a nav bar using JavaScript........................//
const header = document.getElementById('header')
header.addEventListener('click', ()=>{header.style.backgroundColor = `#${Math.floor(Math.random() * 1000) + 1} `})
const UnorderedList = document.getElementById('navbar__list')

for(let i=1;i<=4;i++){
    const listItem = document.createElement('li')
    const a = document.createElement('a')
    a.setAttribute('class','menu__link')
    a.setAttribute('href',`#section${i}`)
    a.appendChild(listItem)
    
    listItem.textContent = `Section ${i}`
    UnorderedList.appendChild(a)
}
//nav bar styling...........
UnorderedList.style = "display: flex; flex-direction: row; float: right"

//Inserting a new Section via javaScript..................//
const main = document.getElementById('main-content') //Saving the main tag in main....

//creating some tags and putting data in them........................
const newSection = document.createElement('section')
newSection.setAttribute('id', 'section4')
newSection.setAttribute('data-nav','section 4')

const newDiv = document.createElement('div')
newDiv.setAttribute('class','landing__container')

const newHeading = document.createElement('h2')
newHeading.textContent = 'Section 4'

const firstPara = document.createElement('p')
firstPara.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie semper in tellus. Sed congue et odio sed euismod.'

const secPara = document.createElement('p')
secPara.textContent = 'Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida, ipsum lacus aliquet velit, vel luctus diam ipsum a diam. Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum consectetur porttitor. Suspendisse imperdiet porttitor tortor, eget elementum tortor mollis non.'

//appending child in the above created tags.......................
newDiv.appendChild(newHeading)
newDiv.appendChild(firstPara)
newDiv.appendChild(secPara)
newSection.appendChild(newDiv)

//appending the new section in the main tag...........
main.appendChild(newSection)

//.........................................................//

//..................THE LANDING PAGE HEADING........................//
const heading = document.getElementById('page_heading')

colorChange = () =>{
    heading.style = "color: black"
}
colorChangeRev = () =>{
    heading.style = "color: white"
}
heading.addEventListener('mouseover',colorChange)
heading.addEventListener('mouseout',colorChangeRev)
//...................................................................//

//.................MAIN CONTENT......................................//

for(let i=1;i<=4;i++){
    const sec = document.getElementById(`section${i}`)
    sec.addEventListener('mouseenter', ()=>{
        sec.setAttribute('class','your-active-class')
    })
    sec.addEventListener('mouseleave',()=>{
        sec.removeAttribute('class', 'your-active-class')
    })
}
