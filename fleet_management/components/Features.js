import React from 'react';

const Features = () => {
  return (
    <section>
      <div className='container flex flex-col space-y-12 mt-10 px-6 mx-auto md:flex-row'>
        {/* What's different */}
        <div className='flex flex-col space-y-12 md:w-1/2'>
          <h2 className='max-w-md text-4xl font-bold text-center md:text-left'>
            What's different about Manage?
          </h2>
          <p className='max-w-sm text-center text-darkGrayishBlue md:text-left'>
            Manage provides all the customisation a fleet management company
            needs, without the complexity. Our software can be tailor-made to
            fit your business needs.
          </p>
        </div>
        {/* Numbered List on the right */}
        <div className='container flex flex-col space-y-8 md:w-1/2'>
          <div className='flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row'>
            <div className='rounded-l-full bg-brightRedSupLight md:bg-transparent'>
              <div className='flex items-center space-x-2'>
                <div className='px-4 py-2 rounded-full md:py-1 bg-brightRed'>
                  01
                </div>
                <h3 className='text-base font-bold md:mb-4 md:hidden'>
                  Track company wide costs
                </h3>
              </div>
            </div>
            <div>
              <h3 className='hidden mb-4 text-lg font-bold md:block'>
                Track company wide costs
              </h3>
              <p className='text-darkGrayishBlue'>
                See how your day-to-day usage fits into the wider vision. Go
                from tracking process at the milestone level all the way to the
                smallest of details.{' '}
                <span className='text-indigo-500 font-semibold'>
                  Never lose sight of the bigger picture again.
                </span>
              </p>
            </div>
          </div>
          <div className='flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row'>
            <div className='rounded-l-full bg-brightRedSupLight md:bg-transparent'>
              <div className='flex items-center space-x-2'>
                <div className='px-4 py-2 rounded-full md:py-1 bg-brightRed'>
                  02
                </div>
                <h3 className='text-base font-bold md:mb-4 md:hidden'>
                  Advanced Built-in Reports
                </h3>
              </div>
            </div>
            <div>
              <h3 className='hidden mb-4 text-lg font-bold md:block'>
                Advanced Built-in Reports
              </h3>
              <p className='text-darkGrayishBlue'>
                Set internal costing estimates and track progress towards
                company goals.{' '}
                <span className='text-indigo-500 font-semibold'>
                  Build the reports you need to keep stakeholders informed.
                </span>
              </p>
            </div>
          </div>
          <div className='flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row'>
            <div className='rounded-l-full bg-brightRedSupLight md:bg-transparent'>
              <div className='flex items-center space-x-2'>
                <div className='px-4 py-2 rounded-full md:py-1 bg-brightRed'>
                  03
                </div>
                <h3 className='text-base font-bold md:mb-4 md:hidden'>
                  Everything you need in one place
                </h3>
              </div>
            </div>
            <div>
              <h3 className='hidden mb-4 text-lg font-bold md:block'>
                Everything you need in one place
              </h3>
              <p className='text-darkGrayishBlue'>
                Stop jumping from one service to another to track their
                location, determine the next servicing schedule and identify
                liabilities.
                <span className='text-indigo-500 font-semibold'>
                  Manage offers an all-in-one solution.
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
