// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import {
    getFirestore,
    doc,
    getDoc,
    getDocs,
    collection,
    addDoc
} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAgTtxlKC30ujeLQ2pEqenEvFNRQdUMGD8",
  authDomain: "dimar-be8bc.firebaseapp.com",
  projectId: "dimar-be8bc",
  storageBucket: "dimar-be8bc.firebasestorage.app",
  messagingSenderId: "949420069509",
  appId: "1:949420069509:web:8f5b5fcfc7bf53d25b8fec"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

//obtener un producto ESTO PASA A ITEMDETAILCONTAINER

export async function getSingleProduct(id) {
    const documentRef = doc(db, 'items', id);

    try {
        const snapshot = await getDoc(documentRef);
            if (snapshot.exists()) {
                return snapshot.data();
            }  else {
            console.log('El documento no existe!');
        }
            } catch (error) {
            console.error('Error al obtener el documento: ', error);
        }
    };

//obtener toda una coleccion ITEMLISTCONTAINER

export async function getProducts() {
    try {
        const querySnapshot = await getDocs(collection(db, 'items'));
        if (querySnapshot.size !== 0) {
            const productsList = querySnapshot.docs.map((docu) => {
                return {
                    id: docu.id,
                    ...docu.data(),
                };
        });
            return productsList;
        } else {
            console.log('Coleccion vacía !');
        }
        } catch (error) {
        console.error('Error al obtener la coleccion: ', error);
        }
    }

    //agregar una nueva orden de pedido
    export const sendOrder = async (order) => {
        try {
          const orderRef = await addDoc(collection(db, "orders"), {
            ...order,
            date: serverTimestamp(), // Agregar la fecha al guardar la orden
          });
          return orderRef.id; // Devuelve el ID de la orden
        } catch (error) {
          console.error("Error al enviar la orden a Firebase:", error);
          throw new Error("No se pudo procesar la orden.");
        }
      };
