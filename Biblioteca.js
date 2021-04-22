const booksByCategory = [
    {
        category: 'Riqueza',
        books: [
            { 
                title: 'Ser Rico',
                author:'T. Harv Eker'
            },
            {
                title: 'Fui rico',
                author:'George S. Clason'
            },
            {
                title: 'Serei Rico',
                author:'Robert T. Kiyosaki e Shanon L. Lechter'
            }
        ]
    },
    {
        category: "Inteliência emocional",
        books: [
            { 
                title: 'Pense depois aja',
                author:'Augusto Cury'
            },
            {
                title: 'Larga de ser burro',
                author:'Augusto Cury'
            },
            {
                title: 'Homem também chora',
                author:'Stephen R. Covey'
            }
        ]
    }
]
/*
const totalCategory = booksByCategory.length
console.log('Total de Categorias ' +  totalCategory)

for(let category of booksByCategory){
    console.log('Total de livos da categoria '+ category.category + ': ' +  category.books.length)
}

function countAuthors(){
   let authors = []

    for(let category of booksByCategory){
        for(let book of category.books){
            if(authors.indexOf(book.author) == -1){
                authors.push(book.author)
            }
        }
    }

    console.log('Total de autores ' + authors.length)
}

countAuthors()

function booksOfAugustoCury(){
    let books = []
 
     for(let category of booksByCategory){
         for(let book of category.books){
             if(book.author == 'Augusto Cury'){
                 books.push(book.title)
             }
         }
     }
 
     console.log('Livros de Augusto Cury: ' + books)
 }
  booksOfAugustoCury()
*/
function booksOfAuthor(author){
    let books = []
 
     for(let category of booksByCategory){
         for(let book of category.books){
             if(book.author == author){
                 books.push(book.title)
             }
         }
     }
 
     console.log('Livros de ' + author + ': ' + books.join(', '))
 }
  booksOfAuthor('Augusto Cury')
