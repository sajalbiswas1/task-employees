import { Modal, Button } from "react-bootstrap";
// components
import { FormInput } from "../../../../components/";

interface AddNewTaskProps {
  newTaskModal: boolean;
  toggleNewTaskModal: () => void;
}

const AddDepartmentModal = ({
  newTaskModal,
  toggleNewTaskModal,
}: AddNewTaskProps) => {
  return (
    <Modal show={newTaskModal} onHide={toggleNewTaskModal} centered>
      <Modal.Header closeButton>
        <h4 className="modal-title">Add New Department</h4>
      </Modal.Header>
      <Modal.Body>
        <form className="px-2">
          <FormInput
            name="Department Name *"
            label="Department Name *"
            placeholder="Enter title"
            type="text"
            containerClass="mb-3"
            // register={register}
            key="title"
            // errors={errors}
            // control={control}
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
              Submit
            </Button>
          </div>
        </form>
      </Modal.Body>
    </Modal>
  );
};

export default AddDepartmentModal;
