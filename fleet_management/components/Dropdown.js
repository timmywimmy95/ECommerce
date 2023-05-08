import React, { useState } from 'react';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { Popover, Transition } from '@headlessui/react';
import { AiOutlineDelete } from 'react-icons/ai';
import { GrFormEdit } from 'react-icons/gr';
import Link from 'next/link';
import { useRouter } from 'next/router';
import DeleteModal from './deleteModal';

const Dropdown = ({ info, handleDelete, handleEdit }) => {
  const router = useRouter();
  // const handleEdit = () => {
  //   router.push(`http://localhost:3000/servicing/${info.id}/update_servicing`);
  // };
  const [open, setOpen] = useState(false);
  return (
    <>
      <Popover className='relative'>
        {open && (
          <DeleteModal
            handleDelete={handleDelete}
            open={open}
            setOpen={setOpen}
          />
        )}
        <Popover.Button>
          <BsThreeDotsVertical />
        </Popover.Button>
        <Transition
          enter='transition duration-100 ease-out'
          enterFrom='transform scale-95 opacity-0'
          enterTo='transform scale-100 opacity-100'
          leave='transition duration-75 ease-out'
          leaveFrom='transform scale-100 opacity-100'
          leaveTo='transform scale-95 opacity-0'
        >
          <Popover.Panel className='absolute justify-end'>
            <div className='flex flex-row-reverse items-center'>
              <button
                onClick={() => {
                  setOpen(!open);
                }}
              >
                <span>
                  <AiOutlineDelete className='text-indigo-600 ' size={20} />
                </span>
              </button>
              <button onClick={handleEdit}>
                <span>
                  <GrFormEdit className='text-indigo-600' size={22} />
                </span>
              </button>
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>
    </>
  );
};

export default Dropdown;
