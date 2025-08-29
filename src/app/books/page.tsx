 import BookListComponent from '../../components/BookList'
 
 export default function BookListPage() {
   return (
     <div className="px-8 md:px-16">
       <div className="container max-w-3xl mx-auto pt-8 md:pt-16 pb-12">
         <h1 className="font-decoration text-2xl md:text-4xl xl:text-5xl text-center font-light mb-14">
           Book List
         </h1>
        <BookListComponent />
       </div>
     </div>
   );
 }
 
