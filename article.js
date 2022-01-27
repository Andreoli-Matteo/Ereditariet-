class Article {
    constructor(title, date) {
      this.title = title;
      this.date = date;
    }
  
    static compare(articleA, articleB) {
      return articleA.date - articleB.date;
    }
    static createTodays() {
        // ricorda, this = Article
        return new this("Today's digest", new Date());
      }
      static publisher = "Ilya Kantor";

    
  }
  let article = Article.createTodays();

alert( article.title ); // Today's digest
alert( Article.publisher ); // Ilya Kantor
//Lo stesso che si otterrebbe con un assegnazione diretta ad Article:
Article.publisher = "Ilya Kantor";


  // usage
  let articles = [
    new Article("HTML", new Date(2019, 1, 1)),
    new Article("CSS", new Date(2019, 0, 1)),
    new Article("JavaScript", new Date(2019, 11, 1))
  ];
  
  articles.sort(Article.compare);
  alert( articles[0].title ); // CSS
  Article.remove({id: 12345});

  
  