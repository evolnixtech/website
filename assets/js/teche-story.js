import * as THREE from "three";

const container = document.getElementById("teche-canvas");

const scene = new THREE.Scene();

scene.fog = new THREE.Fog(
    0x07152d,
    8,
    25
);


const camera = new THREE.PerspectiveCamera(
    35,
    container.clientWidth / container.clientHeight,
    0.1,
    100
);

camera.position.set(
    0,
    3.2,
    10
);


const renderer = new THREE.WebGLRenderer({
    antialias: true,
    alpha: true
});

renderer.setPixelRatio(
    Math.min(window.devicePixelRatio, 2)
);

renderer.setSize(
    container.clientWidth,
    container.clientHeight
);

renderer.shadowMap.enabled = true;

renderer.shadowMap.type =
    THREE.PCFSoftShadowMap;

container.appendChild(
    renderer.domElement
);


/* =========================================
   LIGHTING
========================================= */

const ambientLight =
    new THREE.HemisphereLight(
        0xffffff,
        0x16264a,
        2
    );

scene.add(ambientLight);


const keyLight =
    new THREE.DirectionalLight(
        0xffffff,
        3
    );

keyLight.position.set(
    4,
    8,
    6
);

keyLight.castShadow = true;

scene.add(keyLight);


const blueLight =
    new THREE.PointLight(
        0x2675ff,
        12,
        10
    );

blueLight.position.set(
    2,
    3,
    2
);

scene.add(blueLight);


/* =========================================
   MATERIALS
========================================= */

const skinMaterial =
    new THREE.MeshStandardMaterial({
        color: 0xf2b48f,
        roughness: .65
    });


const hoodieMaterial =
    new THREE.MeshStandardMaterial({
        color: 0x1769ff,
        roughness: .65
    });


const darkMaterial =
    new THREE.MeshStandardMaterial({
        color: 0x101a2c,
        roughness: .7
    });


const whiteMaterial =
    new THREE.MeshStandardMaterial({
        color: 0xffffff,
        roughness: .4
    });


const shoeMaterial =
    new THREE.MeshStandardMaterial({
        color: 0x172033,
        roughness: .7
    });


/* =========================================
   CHARACTER
========================================= */

const teche = new THREE.Group();

teche.position.set(
    1.3,
    0,
    0
);

scene.add(teche);


/* BODY */

const body = new THREE.Mesh(
    new THREE.CapsuleGeometry(
        .65,
        1.25,
        8,
        16
    ),
    hoodieMaterial
);

body.position.y = 2.1;

body.scale.set(
    1,
    1.1,
    .7
);

body.castShadow = true;

teche.add(body);


/* HEAD */

const head = new THREE.Mesh(
    new THREE.SphereGeometry(
        .65,
        32,
        32
    ),
    skinMaterial
);

head.position.y = 3.55;

head.scale.set(
    1,
    1.08,
    .95
);

head.castShadow = true;

teche.add(head);


/* HAIR */

const hair = new THREE.Mesh(
    new THREE.SphereGeometry(
        .68,
        24,
        16
    ),
    darkMaterial
);

hair.position.set(
    0,
    3.9,
    -.05
);

hair.scale.set(
    1,
    .55,
    1
);

teche.add(hair);


/* =========================================
   EYES
========================================= */

function createEye(x) {

    const eye = new THREE.Group();

    const white = new THREE.Mesh(
        new THREE.SphereGeometry(
            .13,
            20,
            20
        ),
        whiteMaterial
    );

    const pupil = new THREE.Mesh(
        new THREE.SphereGeometry(
            .065,
            16,
            16
        ),
        darkMaterial
    );

    pupil.position.z = .11;

    eye.add(white);
    eye.add(pupil);

    eye.position.set(
        x,
        3.62,
        -.58
    );

    teche.add(eye);

    return eye;
}


const leftEye =
    createEye(-.22);

const rightEye =
    createEye(.22);


/* =========================================
   ARMS
========================================= */

function createArm(x) {

    const pivot = new THREE.Group();

    pivot.position.set(
        x,
        2.45,
        0
    );

    const arm = new THREE.Mesh(
        new THREE.CapsuleGeometry(
            .18,
            .8,
            8,
            12
        ),
        hoodieMaterial
    );

    arm.position.y = -.45;

    arm.castShadow = true;

    pivot.add(arm);

    teche.add(pivot);

    return pivot;
}


const leftArm =
    createArm(-.72);

const rightArm =
    createArm(.72);


/* =========================================
   HANDS
========================================= */

function createHand(x) {

    const hand = new THREE.Mesh(
        new THREE.SphereGeometry(
            .22,
            16,
            16
        ),
        skinMaterial
    );

    hand.position.set(
        x,
        1.75,
        .05
    );

    teche.add(hand);

    return hand;
}


const leftHand =
    createHand(-.72);

const rightHand =
    createHand(.72);


/* =========================================
   LEGS
========================================= */

function createLeg(x) {

    const leg = new THREE.Mesh(
        new THREE.CapsuleGeometry(
            .24,
            .9,
            8,
            12
        ),
        darkMaterial
    );

    leg.position.set(
        x,
        .9,
        0
    );

    leg.castShadow = true;

    teche.add(leg);

    return leg;
}


const leftLeg =
    createLeg(-.32);

const rightLeg =
    createLeg(.32);


/* =========================================
   SHOES
========================================= */

function createShoe(x) {

    const shoe = new THREE.Mesh(
        new THREE.SphereGeometry(
            .28,
            16,
            12
        ),
        shoeMaterial
    );

    shoe.position.set(
        x,
        .35,
        -.12
    );

    shoe.scale.set(
        1.3,
        .55,
        1.7
    );

    teche.add(shoe);

    return shoe;
}


const leftShoe =
    createShoe(-.32);

const rightShoe =
    createShoe(.32);


/* =========================================
   DESK
========================================= */

const desk = new THREE.Mesh(
    new THREE.BoxGeometry(
        5,
        .25,
        2
    ),
    darkMaterial
);

desk.position.set(
    0,
    1.1,
    0
);

desk.castShadow = true;
desk.receiveShadow = true;

scene.add(desk);


/* =========================================
   LAPTOP
========================================= */

const laptop =
    new THREE.Group();


const laptopBase =
    new THREE.Mesh(
        new THREE.BoxGeometry(
            2.2,
            .12,
            1.4
        ),
        darkMaterial
    );

laptopBase.position.y =
    1.28;

laptop.add(laptopBase);


const laptopScreen =
    new THREE.Mesh(
        new THREE.BoxGeometry(
            2.2,
            1.45,
            .1
        ),
        darkMaterial
    );

laptopScreen.position.set(
    0,
    2,
    -.65
);

laptopScreen.rotation.x =
    -.08;

laptop.add(laptopScreen);


const screen =
    new THREE.Mesh(
        new THREE.PlaneGeometry(
            1.9,
            1.15
        ),
        new THREE.MeshBasicMaterial({
            color: 0x1264ff
        })
    );

screen.position.set(
    0,
    2,
    -.71
);

screen.rotation.x =
    -.08;

laptop.add(screen);


laptop.position.set(
    1.1,
    0,
    .2
);

scene.add(laptop);


/* =========================================
   FLOOR
========================================= */

const floor =
    new THREE.Mesh(
        new THREE.PlaneGeometry(
            30,
            30
        ),
        new THREE.MeshStandardMaterial({
            color: 0x050c18,
            roughness: .8
        })
    );

floor.rotation.x =
    -Math.PI / 2;

floor.position.y = 0;

floor.receiveShadow = true;

scene.add(floor);


/* =========================================
   STORY STATE
========================================= */

const story = {

    time: 0,

    phase: "thinking",

    duration: 0

};


const storyText =
    document.getElementById(
        "story-text"
    );

const thoughtBubble =
    document.getElementById(
        "thought-bubble"
    );

const actionButton =
    document.getElementById(
        "journey-action"
    );


/* =========================================
   STORY FUNCTIONS
========================================= */

function setStoryText(text) {

    storyText.textContent = text;

}


function thinking() {

    story.phase =
        "thinking";

    story.time = 0;

    thoughtBubble.classList.add(
        "show"
    );

    setStoryText(
        "TechE wants to upgrade his skills."
    );

    actionButton.textContent =
        "Start Learning →";
}


function browsing() {

    story.phase =
        "browsing";

    story.time = 0;

    thoughtBubble.classList.remove(
        "show"
    );

    setStoryText(
        "TechE visits evolnixtech.com and explores the learning platform."
    );

}


function learning() {

    story.phase =
        "learning";

    story.time = 0;

    setStoryText(
        "He finds a course that matches what he wants to learn."
    );

}


function completed() {

    story.phase =
        "completed";

    story.time = 0;

    setStoryText(
        "TechE has started learning. Time for the next step."
    );

    actionButton.textContent =
        "Continue Journey →";

}


function walkToNext() {

    story.phase =
        "walking";

    story.time = 0;

    setStoryText(
        "TechE is ready for the next stage..."
    );

}


thinking();


/* =========================================
   ANIMATION
========================================= */

const clock =
    new THREE.Clock();


function animateCharacter(time) {

    const t = time * .001;


    /* BREATHING */

    body.scale.y =
        1.1 +
        Math.sin(t * 2) * .025;


    /* THINKING */

    if (story.phase === "thinking") {

        head.rotation.z =
            Math.sin(t * 1.4) * .04;

        head.rotation.y =
            Math.sin(t * 1.1) * .12;

        leftEye.position.x =
            -.22 +
            Math.sin(t * 2) * .025;

        rightEye.position.x =
            .22 +
            Math.sin(t * 2) * .025;

        /*
         * Hand moves toward chin.
         */

        rightArm.rotation.z =
            -.65;

        rightHand.position.y =
            2.65;

        rightHand.position.z =
            .15;

    }


    /* BROWSING */

    if (story.phase === "browsing") {

        head.rotation.y =
            Math.sin(t * 1.2) * .08;

        rightArm.rotation.z =
            -.25;

        leftArm.rotation.z =
            .25;

        rightHand.position.y =
            1.4;

        leftHand.position.y =
            1.4;

    }


    /* LEARNING */

    if (story.phase === "learning") {

        head.rotation.y =
            Math.sin(t * .8) * .05;

        rightArm.rotation.z =
            -.15;

        leftArm.rotation.z =
            .15;

        /*
         * Small typing movement.
         */

        rightHand.position.y =
            1.35 +
            Math.sin(t * 12) * .025;

        leftHand.position.y =
            1.35 +
            Math.sin(t * 12 + 1) * .025;

    }


    /* WALKING */

    if (story.phase === "walking") {

        teche.position.x -=
            .025;

        teche.rotation.y =
            -.2;

        leftLeg.rotation.x =
            Math.sin(t * 8) * .6;

        rightLeg.rotation.x =
            Math.sin(t * 8 + Math.PI) * .6;

        leftArm.rotation.x =
            Math.sin(t * 8 + Math.PI) * .35;

        rightArm.rotation.x =
            Math.sin(t * 8) * .35;

    }

}


/* =========================================
   AUTOMATIC STORY
========================================= */

function updateStory(delta) {

    story.time += delta;


    if (
        story.phase === "thinking" &&
        story.time > 4
    ) {

        browsing();

    }


    else if (
        story.phase === "browsing" &&
        story.time > 5
    ) {

        learning();

    }


    else if (
        story.phase === "learning" &&
        story.time > 6
    ) {

        completed();

    }


    else if (
        story.phase === "completed" &&
        story.time > 3
    ) {

        walkToNext();

    }


    else if (
        story.phase === "walking" &&
        story.time > 4
    ) {

        /*
         * PHASE 2 WILL BE CONNECTED HERE.
         */

        story.phase =
            "waiting";

        setStoryText(
            "Next: Training & Internship"
        );

    }

}


/* =========================================
   BUTTON
========================================= */

actionButton.addEventListener(
    "click",
    () => {

        if (
            story.phase === "thinking"
        ) {

            browsing();

        }

        else if (
            story.phase === "completed"
        ) {

            walkToNext();

        }

    }
);


/* =========================================
   RENDER LOOP
========================================= */

function render() {

    requestAnimationFrame(
        render
    );

    const delta =
        clock.getDelta();

    const elapsed =
        performance.now();

    updateStory(delta);

    animateCharacter(
        elapsed
    );


    /*
     * Camera breathing
     */

    camera.position.x =
        Math.sin(
            elapsed * .0003
        ) * .15;

    camera.lookAt(
        .5,
        2.2,
        0
    );


    renderer.render(
        scene,
        camera
    );

}


render();


/* =========================================
   RESIZE
========================================= */

window.addEventListener(
    "resize",
    () => {

        camera.aspect =
            container.clientWidth /
            container.clientHeight;

        camera.updateProjectionMatrix();

        renderer.setSize(
            container.clientWidth,
            container.clientHeight
        );

    }
);