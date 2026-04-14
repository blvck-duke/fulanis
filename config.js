// =====================================================
// FULANI'S — Système de gestion des commandes
// Ce fichier est partagé entre index.html et admin.html
// =====================================================

const STORAGE_KEY_STATUS = 'fulanis_commandes_ouvertes';
const STORAGE_KEY_MAX    = 'fulanis_max_commandes';
const STORAGE_KEY_COUNT  = 'fulanis_nb_commandes';
const STORAGE_KEY_MSG    = 'fulanis_message_ferme';

function getStatus()  { return localStorage.getItem(STORAGE_KEY_STATUS) !== 'false'; }
function getMax()     { return parseInt(localStorage.getItem(STORAGE_KEY_MAX) || '20'); }
function getCount()   { return parseInt(localStorage.getItem(STORAGE_KEY_COUNT) || '0'); }
function getMsg()     { return localStorage.getItem(STORAGE_KEY_MSG) || "Les commandes sont fermées pour ce dimanche. Revenez bientôt ! 🥞"; }

function setStatus(v) { localStorage.setItem(STORAGE_KEY_STATUS, v); }
function setMax(v)    { localStorage.setItem(STORAGE_KEY_MAX, v); }
function setCount(v)  { localStorage.setItem(STORAGE_KEY_COUNT, v); }
function setMsg(v)    { localStorage.setItem(STORAGE_KEY_MSG, v); }

function commandesOuvertes() {
  return getStatus() && getCount() < getMax();
}

function incrementerCommande() {
  setCount(getCount() + 1);
}
