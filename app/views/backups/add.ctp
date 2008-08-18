<h2>Backup</h2>
<div class="message">
	<p><strong>Instructions:</strong> Select the files you wish to backup below, and then press backup to begin the backup process.</p>
    <p><strong>Hint:</strong> To upload multiple files at once, add your files to a ZIP archive.</p>
</div>
<?php echo $form->create('Backup', array('enctype' => 'multipart/form-data') ); ?>
<?php echo $form->input('File 1', array('type' => 'file', 'name' => 'data[Backup][File]')); ?>
<?php echo $form->input('File 2', array('type' => 'file', 'name' => 'data[Backup][][File]')); ?>
<?php echo $form->input('File 3', array('type' => 'file', 'name' => 'data[Backup][][File]')); ?>
<?php echo $form->input('File 4', array('type' => 'file', 'name' => 'data[Backup][][File]')); ?>
<?php echo $form->input('File 5', array('type' => 'file', 'name' => 'data[Backup][][File]')); ?>
<?php echo $form->input('File 6', array('type' => 'file', 'name' => 'data[Backup][][File]')); ?>
<?php echo $form->input('File 7', array('type' => 'file', 'name' => 'data[Backup][][File]')); ?>
<?php echo $form->input('File 8', array('type' => 'file', 'name' => 'data[Backup][][File]')); ?>
<?php echo $form->input('File 9', array('type' => 'file', 'name' => 'data[Backup][][File]')); ?>
<?php echo $form->input('File 10', array('type' => 'file', 'name' => 'data[Backup][][File]')); ?>
<?php echo $form->end('Backup'); ?>