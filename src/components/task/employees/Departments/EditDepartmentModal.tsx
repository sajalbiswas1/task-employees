import { Modal, Button } from "react-bootstrap";
// components
import { FormInput } from "../../../../components/";

interface AddNewTaskProps {
  newTaskModal: boolean;
  toggleNewTaskModal: () => void;
  rowData: any;
}
const EditDepartmentModal = ({
  newTaskModal,
  toggleNewTaskModal,
  rowData,
}: AddNewTaskProps) => {
  return (
    <Modal show={newTaskModal} onHide={toggleNewTaskModal} centered>
      <Modal.Header closeButton>
        <h4 className="modal-title">Edit Department</h4>
      </Modal.Header>
      <Modal.Body>
        <form className="px-2">
          <FormInput
            name="Department Name *"
            label="Department Name *"
            placeholder="Enter title"
            type="text"
            containerClass="mb-3"
            defaultValue={rowData.department}
            key="title"
          />

          <div className="text-end">
            <Button
              variant="light"
              className="me-1"
              onClick={toggleNewTaskModal}
            >
              Cancel
            </Button>
            <Button variant="primary" type="submit">
              Save
            </Button>
          </div>
        </form>
      </Modal.Body>
    </Modal>
  );
};

export default EditDepartmentModal;
