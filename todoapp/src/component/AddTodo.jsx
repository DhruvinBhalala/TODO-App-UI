function Addtodo() {
  return (
    <>
      <div class="row kg-row">
        <div class="col-6">
          <input type="text" placeholder="TODO Hear" />
        </div>
        <div class="col-4">
          <input type="date" />
        </div>
        <div class="col-2">
          <button type="button" class="btn btn-success kg-btn">
            Add
          </button>
        </div>
      </div>
    </>
  );
}

export default Addtodo;
