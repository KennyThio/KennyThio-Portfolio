#pragma strict

function Start () {

}

function Update () {

	transform.renderer.enabled=true;
	transform.collider.enabled=true;
	transform.collider.isTrigger=true;
}