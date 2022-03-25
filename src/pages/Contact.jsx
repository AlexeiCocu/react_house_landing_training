import React from 'react';
import {useState, useEffect} from "react";
import {useParams, useSearchParams} from 'react-router-dom';
import {doc, getDoc} from 'firebase/firestore';
import {db} from "../firebase.config";
import {toast} from "react-toastify";


const Contact = () => {
    const [message, setMessage] = useState('');
    const [landLord, setLandLord] = useState(null);
    const [searchParams, setSearchParams] = useSearchParams();

    const params = useParams();

    useEffect(()=>{
        const getLandLord = async () => {
            const docRef = doc(db, 'users', params.landlordId);
            const docSnap = await getDoc(docRef);

            if(docSnap.exists()){
                setLandLord(docSnap.data())
            }else {
                toast.error('Could not get land lord data')
            }
        }

        getLandLord();

    }, [params.landlordId])

    const onChange = (e) => setMessage(e.target.value)

    return (
        <div className='pageContainer'>
            <header className='pageHeader'>Contact Landlord</header>

            {landLord !== null && (
                <main>
                    <div className='contactLandlord'>
                        <p className='landlordName'>Contact {landLord.name}</p>
                    </div>

                    <form className='messageForm'>
                        <div className='messageDiv'>
                            <label className='messageLabel' htmlFor='message'>
                                Message
                            </label>
                            <textarea name="message" id="message" className='textarea' value={message} onChange={onChange}></textarea>
                        </div>
                        <a href={`mailto:${landLord.email}?Subject=${searchParams.get('listingName')}&body=${message}`}>
                            <button className='primaryButton' type='button'>Send Message</button>
                        </a>
                    </form>
                </main>
            )}
        </div>
    );
};

export default Contact;