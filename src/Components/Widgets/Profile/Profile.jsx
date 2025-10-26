import React, { useState } from 'react';
import styles from './Profile.module.css';
import Help from '../../Help/Help';

const Profile = ({ data }) => {
    // Initialize with 'About Me' tab active
    const [activeTab, setActiveTab] = useState('aboutMe');

    const tabClasses = (tab) =>
        `px-8 py-2 w-1/3 font-medium text-sm transition-colors duration-200 rounded-lg  ${activeTab === tab
            ? `bg-[#28292f] text-white shadow-lg cursor-auto ${styles.shadow_tab_active}`
            : `text-gray-400 hover:text-gray-200 hover:bg-[#37393d] cursor-pointer`
        }`;

    const renderContent = () => {
        // We use a simple switch for content based on the active tab
        // We must handle line breaks in the text content
        const content = data[activeTab];
        return content.split('\n').map((line, index) => (
            <p key={index} className="text-gray-300 leading-relaxed mb-4 first:text-base first:text-gray-200 first:font-normal">
                {line}
            </p>
        ));
    };

    return (
        <div className="relative bg-[#37393d] flex backdrop-blur-sm rounded-xl shadow-2xl border border-gray-700/50 w-full min-h-[300px] border-r-4 border-b-4 border-gray-950">
            <Help />
            <div className='w-9/10 pt-4 pr-6 mb-4'>
            {/* Tab Navigation */}
            <div className="bg-black p-1 flex space-x-2 mb-6 rounded-lg">
                <button className={tabClasses('aboutMe')} onClick={() => setActiveTab('aboutMe')}>
                    About Me
                </button>
                <button className={tabClasses('experiences')} onClick={() => setActiveTab('experiences')}>
                    Experiences
                </button>
                <button className={tabClasses('recommended')} onClick={() => setActiveTab('recommended')}>
                    Recommended
                </button>
            </div>

            {/* Content Area - Scrollable */}
            <div className="h-[200px] overflow-y-auto pr-4 custom-scroll">
                {renderContent()}
            </div>
            </div>

        </div>
    )
}

export default Profile