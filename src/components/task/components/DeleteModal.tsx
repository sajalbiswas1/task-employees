import { Modal, Button } from "react-bootstrap";
// components

interface AddNewTaskProps {
  newTaskModal: boolean;
  toggleNewTaskModal: () => void;
}
const DeteleModal = ({ newTaskModal, toggleNewTaskModal }: AddNewTaskProps) => {
  return (
    <Modal show={newTaskModal} onHide={toggleNewTaskModal} centered>
      <Modal.Header closeButton>
        <h4 className="modal-title">Delete Department</h4>
      </Modal.Header>
      <Modal.Body>
        <p className="card-text">Are you sure want to delete?</p>
        <a className="btn btn-primary">Delete</a>
        <div className="text-center">
          <Button variant="light" className="me-1" onClick={toggleNewTaskModal}>
            Cancel
          </Button>
          <Button variant="primary" type="submit">
            Save
          </Button>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default DeteleModal;
