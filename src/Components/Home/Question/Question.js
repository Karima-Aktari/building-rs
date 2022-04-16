import React from 'react';

const Question = () => {
    return (
        <div className='container mx-auto my-4 py-2'>
            <div className='bg-gray-700 text-center py-7 rounded-3xl'>
                <h1 className='text-3xl text-gray-50 font-bold'>Do You Have Any Question?</h1>
                <p className='text-sm text-gray-200 w-96 mx-auto py-5 flex flex-wrap font-medium'>
                    Find Digital Agencies In Usa! Always Facts. Results & Answers. Privacy Friendly. Unlimited Access. The Best Resources.
                </p>
                <input type='email' placeholder='Enter email address' className='p-2 px-5 rounded' required />
                <button className='bg-blue-600 px-4 py-2 text-md text-slate-200 font-medium rounded'>Submit Here</button>
            </div>
        </div>
    );
};

export default Question;