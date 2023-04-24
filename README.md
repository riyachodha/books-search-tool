# Toronto Book Depot

1.  How long did you spend on the coding assignment?
a.What would you add to your solution if you had more time?

Answer:
1) Would love to add a feature were by using subscription model, user can read the books of their choice. 
2) Maybe add a feature to enable audio books for users, so that they can search and listen to their favorite books.

b.If you didn't spend much time on the coding test, then use this as an opportunity to explain what you would add.

Answer: Tried to add couple of features to make the app look interesting, would have love to use css frameworks like material UI or Tailwind.
I would spend more time on unit test cases, adding more elaborative components unit test cases, also spent more time on error handling and implementing error pages or better error handling messages for the user. Worked more on the performance handling of the application, make added lazy loading or created more independent and modular components for faster rendering. 

2. What was the most useful feature that was added to the latest version of your chosen language? Please include a snippet of code that shows how you've used it.

Answer: Context API and Hooks are great features added to React because they provide a way to manage state and share data between components without the need for prop drilling or passing data through intermediate components. They reduce the complexity of the code and make it easier to write and maintain React applications.

Context API allows you to create a global data store that can be accessed by any component in your application, regardless of its position in the component tree.       This makes it easy to share data and state across multiple components without the need to pass props down through every level of the tree. It also allows you to       update the state of the context provider, which automatically updates the state of all the components that are consuming that context.
Hooks, on the other hand, provide a way to manage state and lifecycle methods in functional components. Prior to the introduction of hooks, if you wanted to use       state in a functional component, you had to use a stateless functional component or use a class component. With hooks, you can now use state and lifecycle methods in functional components, which simplifies the code and makes it easier to manage state.

I have used hooks like useState or useEffect in many files and used Context API for managing the state of the application.

Example of hooks and custom hook : 
  const { books, loading, resultTitle } = useGlobalContext();
  const [booksWithCoverArr, setBooksWithCoverArr] = useState([] as any);

Example of creating a context api:
    const AppContext = React.createContext();

Example of useCallback hook:

 const fetchBooksData = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch(`${URL}${searchTerm}`);
      const data = await response.json();
      const { docs } = data;
      if (docs) {
        const newBooks = docs.slice(0, 20).map((bookSingle) => {
          const {
            key,
            author_name,
            cover_i,
            edition_count,
            first_publish_year,
            title,
          } = bookSingle;

          return {
            id: key,
            author: author_name,
            cover_id: cover_i,
            edition_count: edition_count,
            first_publish_year: first_publish_year,
            title: title,
          };
        });
        const alphabeticallySortedTitleData = newBooks.sort((a, b) =>
          a.title.localeCompare(b.title)
        );
        setBooks(alphabeticallySortedTitleData);
        if (alphabeticallySortedTitleData.length > 1) {
          setResultTitle("Your Search result");
        } else {
          setResultTitle("No Search Result Was Found.");
        }
      } else {
        setBooks([]);
        setResultTitle("No Search Result Found.");
      }

      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }, [searchTerm]);

3. How would you track down a performance issue in production? Have you ever had to do this?

Answer: We can follow these steps to track down the performance issues in Prod, Identifying which issue you are facing, could be page load times issue, slow API response or any other. Then we can collect the information/data around the issue we forcasted, this data could be metrics such as CPU usage, memory usage, or any other network activities. After data gathering we can analyze the data, to find in case we can see any patterns or trends that could be causing the performance issue. Post that start to identify the root cause, this code be bug in the code, maybe issue with DB, or any other underlying network or config issues etc. After the root cause we can start fixing the issue, maybe create tech debt stories or tasks. Post fixing and testing the bug thoroughly, We also need to monitor the system to ensure that the performance issues have been resolved. Also manage a documentation regarding the whole process.

Answer: Yes, I have had to track down performance issues in production before. In one case, we had a website that was experiencing slow load times. We used applicaton performance management tool like logstasht collect data onthe performance of the system and found that the issue was related to a slow database query. We were able to optimize the query and improve the performance of the website.

4.How would you improve the API that you just used?

Answer: The Open Library API could be improved by implementing user authentication and authorization, which would allow developers to access protected resources and perform certain actions only if authorized to do so. The Open Library API documentation could be improved to provide more detailed information on how to use the API, including examples of common use cases and best practices for working with the API. The performance of the Open Library API could be improved by implementing caching techniques, optimizing database queries, and scaling the infrastructure to handle increased traffic.

5. Please describe yourself using correctly formatted JSON.
Answer: Here is a basic json about myself

{
    "name":"Riya Chodha",
    "dob":"10th April",
    "contact":{
        "mobile":"+1647-710-2434",
        "email":"chodhariya100@gmail.com"
    },
    "location":{
        "city":"Etobicoke",
        "province":"Ontario",
        "country":"Canada"
    },
    "origin":"India",
    "education":{
        "degree":"Masters in Computer Science"
    },
    "experience":{
        "years":5,
        "skills":[
            "React JS",
            "Redux",
            "JavaScript",
            "TypeScript",
            "Accessibility",
            "AWS",
            "HTML",
            "CSS",
            "Node JS"
        ]
    }
}
