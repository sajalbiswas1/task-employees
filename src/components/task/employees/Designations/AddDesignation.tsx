import { Modal, Button } from "react-bootstrap";
// components
import { FormInput } from "../../../../components/";

interface AddNewTaskProps {
  newTaskModal: boolean;
  toggleNewTaskModal: () => void;
}

const AddDesignation = ({
  newTaskModal,
  toggleNewTaskModal,
}: AddNewTaskProps) => {
  return (
    <Modal show={newTaskModal} onHide={toggleNewTaskModal} centered>
      <Modal.Header closeButton>
        <h4 className="modal-title">Add Designation</h4>
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
          <FormInput
            name="department"
            label="Department *"
            type="select"
            containerClass="mb-3"
            key="priority"
          >
            <option>All Development</option>
            <option>Finance</option>
            <option>Finance Management</option>
            <option>Hr and Finance</option>
            <option>ITech</option>
          </FormInput>

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

export default AddDesignation;
