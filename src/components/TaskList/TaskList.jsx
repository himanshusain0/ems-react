import React from "react";

const TaskList = () => {
  return (
    <div
      id="tasklist"
      className="h-[55%] overflow-x-auto flex items-center justify-start flex-nowrap gap-5 py-5 w-full mt-10"
    >
      {/* Card 1 */}
      <div className="flex-shrink-0 h-full p-5 w-[300px] bg-yellow-400 rounded-xl">
        <div className="flex justify-between items-center">
          <h3 className="bg-red-600 px-3 py-1 rounded text-white">High</h3>
          <h2 className="text-sm">20 Feb 2024</h2>
        </div>
        <h1 className="text-2xl mt-5 font-semibold">
          Make a YouTube video
        </h1>
        <p className="text-sm mt-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos ad, nemo
          quisquam.
        </p>
      </div>

      {/* Card 2 */}
      <div className="flex-shrink-0 h-full p-5 w-[300px] bg-green-400 rounded-xl">
        <div className="flex justify-between items-center">
          <h3 className="bg-blue-600 px-3 py-1 rounded text-white">Medium</h3>
          <h2 className="text-sm">22 Feb 2024</h2>
        </div>
        <h1 className="text-2xl mt-5 font-semibold">
          Complete React Project
        </h1>
        <p className="text-sm mt-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos ad, nemo
          quisquam.
        </p>
      </div>

      {/* Card 3 */}
      <div className="flex-shrink-0 h-full p-5 w-[300px] bg-blue-400 rounded-xl">
        <div className="flex justify-between items-center">
          <h3 className="bg-yellow-600 px-3 py-1 rounded text-white">Low</h3>
          <h2 className="text-sm">25 Feb 2024</h2>
        </div>
        <h1 className="text-2xl mt-5 font-semibold">
          Revise DSA Topics
        </h1>
        <p className="text-sm mt-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos ad, nemo
          quisquam.
        </p>
      </div>

      {/* Card 4 */}
      <div className="flex-shrink-0 h-full p-5 w-[300px] bg-purple-400 rounded-xl">
        <div className="flex justify-between items-center">
          <h3 className="bg-black px-3 py-1 rounded text-white">Urgent</h3>
          <h2 className="text-sm">28 Feb 2024</h2>
        </div>
        <h1 className="text-2xl mt-5 font-semibold">
          Client Meeting
        </h1>
        <p className="text-sm mt-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos ad, nemo
          quisquam.
        </p>
      </div>
    </div>
  );
};

export default TaskList;
