import React from 'react'
import { useLoaderData, useParams } from 'react-router-dom'
import { Button, Label, TextInput, Textarea } from "flowbite-react";

const EditBooks = () => {
  const {id}= useParams();
  const {authorName, imageURL, category, bookDescription, bookTitle, bookPDFURL} = useLoaderData();

  const bookCategories = [
    "Fiction", "Non-Fiction", "Mystery", "Programming",
    "Science Fiction", "Fantasy", "Horror", "Bibliography",
    "History", "Business", "Children Books", "Travel"
  ];

  const [selectedCategory, setSelectedCategory] = useState(bookCategories[0]);

  const handleSelectedCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  }

  const handleBookSubmission = (event) => {
    event.preventDefault();
    const form = event.target;

    const bookTitle = form.bookTitle.value;
    const authorName = form.authorName.value;
    const imageURL = form.imageURL.value;
    const bookCategory = form.bookCategory.value;
    const bookDescription = form.bookDescription.value;
    const bookURL = form.bookURL.value;

    const bookObj = {
      bookTitle,
      authorName,
      imageURL,
      bookCategory,
      bookDescription,
      bookURL
    };

    console.log(bookObj);
    //send data to Db
    fetch("http://localhost:3000/upload-book",
    {
      method: "POST",
      header: {
        "Content-Type" : "application/json"
      },
      body:JSON.stringify(bookObj)
    }
    ).then(res=> res.json()).then(data=>{
      alert("book Upload Successfully !!!")
    })
  }

  return (
    <div className='px-4 my-12'>
      <h2 className='mb-8 text-3xl font-bold'>Upload A Book</h2>
      <form onSubmit={handleBookSubmission} className="flex lg:w-[1180px] flex-col flex-wrap gap-4">
        <div className='flex gap-8'>
          <div className='lg:w-1/2'>
            <Label htmlFor="bookTitle" value="Book Title" />
            <TextInput id="bookTitle" name='bookTitle' type="text" placeholder="Enter your book title" required />
          </div>
          <div className='lg:w-1/2'>
            <Label htmlFor="authorName" value="Author Name" />
            <TextInput id="authorName" name='authorName' type="text" placeholder="Enter author name" required />
          </div>
        </div>
        <div className='flex gap-8'>
          <div className='lg:w-1/2'>
            <Label htmlFor="imageURL" value="Image URL" />
            <TextInput id="imageURL" name='imageURL' type="text" placeholder="Enter the image URL" required />
          </div>
          <div className='lg:w-1/2'>
            <Label htmlFor="bookCategory" value="Category" />
            <select id="bookCategory" name="bookCategory" className='w-full rounded' value={selectedCategory} onChange={handleSelectedCategoryChange}>
              {bookCategories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
          </div>
        </div>
        <div>
          <Label htmlFor="bookDescription" value="Book Description" />
          <Textarea id="bookDescription" placeholder="Write your book description..." required className='w-full' rows={6} />
        </div>
        <div>
          <Label htmlFor="bookURL" value="Book URL" />
          <TextInput id="bookURL" name="bookURL" type="text" placeholder="Paste your book URL" required />
        </div>
        <Button type="submit" className='mt-5'>Upload Book</Button>
      </form>
    </div>
  );
}

export default EditBooks