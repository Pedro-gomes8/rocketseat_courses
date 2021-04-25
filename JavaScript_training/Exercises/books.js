const booksByCategory = [
    {
        category:'Riqueza',
        books: [
            {
                title:'Os segredos da mente milionaria',
                author: 'T. Harv Eker'
            },
            {
                title:'O homem mais rico da Babilonia',
                author:'George S. Clason'
            },
            {
                title: 'Pai rico, pai pobre',
                author: 'Robert T. Kiyosaki e Sharon L. Lechtor'
            }
        ]
    },

    {
        category:"Inteligencia Emocional",
        books:[
            {
                title:'Voce e Insubstituivel',
                author:'Augusto Cury'
            },
            {
                title:'Ansiedade - Como enfrentar o mal do seculo',
                author:'Augusto Cury'
            },
            {
                title:'Os 7 habitos das pessoas altamente eficazes',
                author:'Stephen R. Covey'
            }
        ]
    }
]

/**
 * Buscando e contando dados em Arrays
 * Baseado no array de Livros de categoria acima, faca:
 *  Contar o nuymero de categorias e o numero de livros em cada categoria.
 *  Mostrar livros do author x
 */
class Books {
    constructor(booksarray){
        this.categories = []
        this.sizes =[]
        for (let categoryobj of booksarray){
            this.categories.push(categoryobj.category);
            
        }
        
    }
}