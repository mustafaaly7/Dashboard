import { useState } from "react";
import { MessageCircle, Phone, Edit, Settings, Menu } from "lucide-react";

export default function HeaderWithSidebar() {
  const [isPanelOpen, setIsPanelOpen] = useState(false);

  const togglePanel = () => {
    setIsPanelOpen(!isPanelOpen);
  };

  return (
    <div>
      {/* Header */}
      <header className="flex items-center justify-between px-4 py-3 bg-gray-800 text-white shadow-md">
        {/* Patient Info */}
        <div>
            
          <h1 className="text-lg font-bold">John Doe</h1>
          <p className="text-sm text-gray-300">Patient ID: 123456</p>
        </div>
        <button
          onClick={togglePanel}
          className="p-2 rounded-md hover:bg-gray-700"
          aria-label="Toggle Info Panel"
        >
          <Menu className="w-6 h-6" />
        </button>
      </header>

      {/* Sliding Panel */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg border-l transition-transform transform ${
          isPanelOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-4 py-3 border-b bg-gray-100">
          <h2 className="text-lg font-semibold">Patient Options</h2>
          <button
            onClick={togglePanel}
            className="p-2 rounded-md hover:bg-gray-200"
            aria-label="Close Panel"
          >
            ✕
          </button>
        </div>
        <div className="p-4 space-y-4">
          {/* Action Buttons */}
          <div className="space-y-2">
            <button className="flex items-center w-full p-2 text-gray-700 hover:bg-gray-100 rounded-md">
              <MessageCircle className="w-5 h-5 mr-3" />
              Send Message
            </button>
            <button className="flex items-center w-full p-2 text-gray-700 hover:bg-gray-100 rounded-md">
              <Phone className="w-5 h-5 mr-3" />
              Make Call
            </button>
            <button className="flex items-center w-full p-2 text-gray-700 hover:bg-gray-100 rounded-md">
              <Edit className="w-5 h-5 mr-3" />
              Edit Data
            </button>
            <button className="flex items-center w-full p-2 text-gray-700 hover:bg-gray-100 rounded-md">
              <Settings className="w-5 h-5 mr-3" />
              Settings
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
