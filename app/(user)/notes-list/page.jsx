"use client";
import React, { useEffect, useState } from 'react';
import { db } from '@/lib/firebase';
import { useSession } from 'next-auth/react';
import { useToast } from "@/components/ui/use-toast"
import { RiLoader2Fill } from 'react-icons/ri';

const page = () => {
    const { data: session, status } = useSession();
    const [notes, setNotes] = useState([]);
    // const notes = []

    const fetchNotes = async () => {
        try {
            const querySnapshot = await getDocs(collection(db, "notes"))
            const notesArray = querySnapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }))

            setNotes(notesArray)
        } catch (error) {
            console.error(error)
            alert("Error fetching note. Visit console for more information.")
        }
    }

    useEffect(() => {
        fetchNotes()
    }, [])

    return (
        <main className='min-h-dvh px-10'>
            <div>
                <h1 className='text-center font-semibold lg:text-4xl text-2xl uppercase text-gray-800 lg:py-8 py-3'>notes list</h1>

                {
                    notes.length === 0 ? <p className='text-center font-semibold text-lg'>No notes</p> : (
                        <div className='flex flex-col gap-5 lg:px-10 px-4  rounded-md'>
                            {
                                notes.map((note, i) => (

                                    <div key={i} className='flex items-center gap-10 bg-gray-50 p-5 rounded-md hover:bg-gray-100 hover:cursor-pointer'>
                                        <h2 className='font-bold text-lg uppercase'>{note.title}</h2>
                                        {console.log(note.title)}
                                        <div className=' w-full'>
                                            <p className='p-2'>
                                                {note.body}
                                            </p>

                                            <span>
                                                Author: <span className='font-semibold'>{note.author}</span>
                                            </span>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    )
                }

            </div>
        </main>
    )
}

export default page