import React, { useEffect, useState } from 'react'
import SearchBox from './SearchBox'
import ContactItem from './ContactItem'
import { useSelector } from 'react-redux'

const ContactList = () => {
    const {contactList, keyword} = useSelector(state=> state);
    const [filteredList, setFilteredList] = useState([]);

    useEffect(() => {
      if( keyword !== '') {
        let list = contactList.filter(item => item.name.includes(keyword));

        setFilteredList(list);
      } else {
        setFilteredList(contactList);
      }
    }, [keyword])

  return (
    <div className='search-area'>
      <SearchBox />
      <div className='list-area'>
        num : { filteredList?.length}
        { filteredList?.length > 0 ?
            filteredList.map(item => <ContactItem item={item}/>)
          : 
            contactList.map(item => <ContactItem item={item}/>)
        }
      </div>
    </div>
  )
}

export default ContactList
