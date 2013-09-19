---
layout: page
title: "Photoshop CS6: Plus loin avec Javascript!"
date: 2013-09-13 15:19
comments: true
sharing: true
footer: true
toc: true
---

Les outils de scripting Photoshop sont une merveilleuse aide pour automatiser et realiser des operations complexes sur les images, malgré toute les qualité de cet outil il arrive un moment ou ses limites sont atteintes, il faut passer au Javascript pour pouvoir manipuler le **DOM** _Document Object Model_ est une interface de programmation qui permet par l'intermediere d'un language de script de manipuler les objets de photoshop. Le modele d'objet de photoshop est une __hierarchie d'imbrication__ Dans  photoshop l'objet application se trouve en haut de la hierarchie Les applications contiennent une collection Documents.
La collection Documents contient des objets Document. Un objet Document contient une
collection ArtLayers, une collection HistoryStates, une collection Layers, une collection Layersets et une
collection Channels. Les commandes ou méthodes du DOM vous permettent d’ordonner à des documents
Photoshop d’ajouter et de supprimer des objets, ou de définir ou changer des propriétés individuelles
d’objet comme la couleur, la taille et la forme. Dans le diagramme ci-dessous, chaque noeud de la
hiérarchie représente une classe dans le DOM Photoshop.
{% img /images/photos/dom.jpg %}

l'apprentissage du Javascript pour Photoshop est un peu ardu pour un débutant d'abors il y a très peu de ressources en français sur le sujet et celles qui existent requiert une certaine connaissance du Javascript. Je vais détailler le chemin que j'ai suivi pour commencer, les outils et ressources que j'ai pu glaner pour constituer un environnement de test et d'apprentissage. avant toutes choses il faut installer


#Les outils de base:

##ESTK CS6 (ExtendScript Toolkit)
C'est l'éditeur fourni avec Photoshop CS6, indispensable outil

{% img /images/photos/estk1200.jpg %}

#Les outils complementaires
---

##Le plugin ScriptListener.8li

<http://helpx.adobe.com/photoshop/kb/plug-ins-photoshop-cs61.html>
{% img /images/photos/ScriptListener.jpg %}
ce plugin s'installe dans ???????? il suis en permanence Photoshop et ecris toutes les operation sur le bureau deux fichiers texte:  Pour Javascript le  fichier ScriptingListenerJS.log et Visual Basic le fichier ScriptingListenerVB.log
chaque action effectuee dans Photoshop est transcrite dans ce fichier
qui peut etre ecrit sous la forme d'une fonction

{% img /images/photos/ScriptingListenerJS.jpg %}


##Adobe Configurator 4
{% img /images/photos/configurator4.jpg %}
Cet editeur d'extention  [Adobe Configurator 4](http://labs.adobe.com/technologies/configurator/)
permet de creer des panneaux personalises puis de les exporter au format ZPX


Les extentions au format ZPX s'installent avec Extention Manager CS6
<http://www.adobe.com/fr/exchange/em_download/em6_download.html>

la page Adobe Scripting Center

<http://www.adobe.com/devnet/scripting.html>

#Les ressources documentaires
---

Le forum des devellopeurs Photoshop: [PS-Scripts](http://www.ps-scripts.com/bb/index.php)

##ScriptUI for dummies:
Un must-have [ScriptUI](http://www.kahrel.plus.com/indesign/scriptui.html)
 L'exellent guide de  **Peter Kahrel** [(bio)](http://www.oreillynet.com/pub/au/2758) sur le scripting:
aussi redacteur de **Scripting InDesign CS3/4 with JavaScript** mis à jour en aout 2010 pour
Indesign CS5

#Les ressources de script
---

##Xtoolkit:

Xtoolkit est une suite de scripts et d'outils

[XTOOLS](http://sourceforge.net/projects/ps-scripts/files/xtools/v2.0b1/)

<http://ps-scripts.sourceforge.net/>

[Documentation sur la suite XTools](http://ps-scripts.sourceforge.net/xtools.html#Anchor-Dem-43404)


##Script Bay:

**Script Bay** une extension Adobe (donc au format ZXP)

de chez **In-tool**, pour les explications sur cette extention [voir ici](http://in-tools.com/article/script-bay/script-panel-replacement-for-the-entire-creative-suite/)

Voir sur cette [page](http://in-tools.com/article/script-bay/script-bay-version-0-1-5/) pour telecharger **Script Bay**


#Le DOM
---

Le site de JongWare, Une Mine d'or pour parcourir le DOM dans une arborescence HTML ou en CHM à telecharger [c'est ici](http://www.jongware.com/idjshelp.html)


#Les ressources video
---

##Adobe TV

La chaine Adobe TV est une mine, j'ai apprecié l'émission **Chips & Tips**
et tout particulierement les épisodes concernant le script:

>* Utilisation du JavaScript dans Photoshop pour se rendre autonome des Script
>* Créer un panneau personnalisé pour optimiser votre travail dans Photoshop

avec Stéphane Baril, expert Design Thibault Imbert, et David Deraedt [c'est ici](http://tv.adobe.com/fr/show/chips-tips/)

##Grafikart.fr



{% include_code test.js %}




