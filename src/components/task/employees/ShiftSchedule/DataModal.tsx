import { useState } from "react";
import { Dropdown } from "react-bootstrap";
import EditScheduleModal from "./EditScheduleModal";
import AddScheduleModal from "./AddScheduleModal";
const DataModal = ({ data }: any) => {
  // edit schedule
  const [showEditScheduleModal, setShowEditScheduleModal] =
    useState<boolean>(false);

  const handleEditScheduleModalClose = () => setShowEditScheduleModal(false);
  const handleEditScheduleModalShow = () => setShowEditScheduleModal(true);

  // add schedule
  const [showAddScheduleModal, setShowAddScheduleModal] =
    useState<boolean>(false);

  const handleAddScheduleModalClose = () => setShowAddScheduleModal(false);
  const handleAddScheduleModalShow = () => setShowAddScheduleModal(true);
  return (
    <>
      <div>
        {data?.scheduleShift ? (
          <>
            <Dropdown as="li" className="list-inline-item fs-18 me-3">
              <Dropdown.Toggle
                id="dropdown-apps"
                as="a"
                className="cursor-pointer text-dark"
              >
                <div
                  id="scheduleShift"
                  onClick={() => handleEditScheduleModalShow()}
                >
                  <span>6:30 am - 9:30 pm (14 hrs 15 mins)</span>
                  <br />
                  <span> Web Designer -SMARTHR</span>
                </div>
              </Dropdown.Toggle>
            </Dropdown>

            <EditScheduleModal
              show={showEditScheduleModal}
              handleClose={handleEditScheduleModalClose}
            />
          </>
        ) : (
          <>
            <Dropdown as="li" className="list-inline-item fs-18 me-3">
              <Dropdown.Toggle
                id="dropdown-apps"
                as="a"
                className="cursor-pointer text-dark"
              >
                <i
                  className="bi bi-plus-square-dotted display-6"
                  onClick={() => handleAddScheduleModalShow()}
                ></i>
              </Dropdown.Toggle>
            </Dropdown>
            {/* Show modal */}
            <AddScheduleModal
              show={showAddScheduleModal}
              handleClose={handleAddScheduleModalClose}
            />
          </>
        )}
      </div>
    </>
  );
};

export default DataModal;
