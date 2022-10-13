class User{
  // Properties
  username: string = ''; 
  age: number = 0; 
  posts: Post[] = [
    new Post()
  ]
  
  // Methods 
  talk(){
    console.log("I am talking")
  }
}

class Post{
  title: string =  ''
}

let firstUser:User = new User();
firstUser.talk();
