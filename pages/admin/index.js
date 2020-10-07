import style from './admin.module.css';
import {useState} from 'react';
// componetns
import NAVBAR from '../../components/NAVBAR';
import HEAD from '../../components/HEAD';


export default function Login(props) {

    const [TitleModal, setTitleModal] = useState("");

    function changActionModal(op){
        switch(op){
            case 1:
            setTitleModal("ADICIONAR");
            break;

            case 2:
            setTitleModal("EDITAR");
            break;

            case 3:
            setTitleModal("REMOVER");
            break;
        }
    }

  return (<section className={style.containerLogin}>
    
    <NAVBAR />
    <HEAD Title="ADMIN - Lewix Generator"/>

    <section className="row">

        <div className="container">
            <div className={"col-sm-12 bg-white "+style.contentDoc}>
                <div class="form-group">
                    <label for="exampleFormControlSelect1">Model select</label>
                    <select class="form-control" id="exampleFormControlSelect1">
                    <option>User</option>
                    </select>
                </div>
            </div>

            <div className={"col-sm-12 bg-white "+style.contentDoc}>
            
            <section className="row">
                <div className={"col-sm-12 "+style.outH1}>

                    <h1>
                        <b>User</b>
                        <a href="#" className="btn btn-success" data-toggle="modal" data-target="#exampleModal" onClick={() => changActionModal(1)}><b>+ ADD</b></a>
                    </h1>

                </div>
            </section>
            <table class="table table-striped">
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">First</th>
                    <th scope="col">Last</th>
                    <th scope="col">Handle</th>
                    <th scope="col" Style="width: 200px">Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        <td>
                            <div class="btn-group" role="group" aria-label="Basic example">
                                <a href="#" data-toggle="modal" data-target="#exampleModal" className="btn btn-primary" onClick={() => changActionModal(2)}>Edit</a>
                                <a href="#" data-toggle="modal" data-target="#exampleModal" className="btn btn-danger" onClick={() => changActionModal(3)}>Remove</a>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                        <td>
                            <div class="btn-group" role="group" aria-label="Basic example">
                                <a href="#" data-toggle="modal" data-target="#exampleModal" className="btn btn-primary" onClick={() => changActionModal(2)}>Edit</a>
                                <a href="#" data-toggle="modal" data-target="#exampleModal" className="btn btn-danger" onClick={() => changActionModal(3)}>Remove</a>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td>Larry</td>
                        <td>the Bird</td>
                        <td>@twitter</td>
                        <td>
                            <div class="btn-group" role="group" aria-label="Basic example">
                                <a href="#" data-toggle="modal" data-target="#exampleModal" className="btn btn-primary" onClick={() => changActionModal(2)}>Edit</a>
                                <a href="#" data-toggle="modal" data-target="#exampleModal" className="btn btn-danger" onClick={() => changActionModal(3)}>Remove</a>
                            </div>
                        </td>
                    </tr>
                </tbody>
                </table>
            </div>

        </div>

    </section>




<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">{TitleModal}</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        ...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>





    </section>);
}